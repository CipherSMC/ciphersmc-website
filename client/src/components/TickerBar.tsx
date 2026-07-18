/**
 * TickerBar — Cipher SMC
 * Design: Institutional Edge — live price ticker bar at top of page
 * Fetches BTC, ETH, XAU/USD from CoinGecko free API every 30s
 */
import { useEffect, useState, useRef } from "react";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface TickerItem {
  symbol: string;
  name: string;
  price: number | null;
  change24h: number | null;
  loading: boolean;
}

const INITIAL_TICKERS: TickerItem[] = [
  { symbol: "BTC", name: "Bitcoin", price: null, change24h: null, loading: true },
  { symbol: "ETH", name: "Ethereum", price: null, change24h: null, loading: true },
  { symbol: "XAUT", name: "Tether Gold", price: null, change24h: null, loading: true },
  { symbol: "EUR/USD", name: "Euro / USD", price: null, change24h: null, loading: true },
  { symbol: "BNB", name: "BNB", price: null, change24h: null, loading: true },
  { symbol: "SOL", name: "Solana", price: null, change24h: null, loading: true },
];

// CoinGecko IDs for crypto
const CRYPTO_IDS = "bitcoin,ethereum,tether-gold,binancecoin,solana";

// Format price with appropriate decimals
function formatPrice(price: number, symbol: string): string {
  if (symbol === "EUR/USD") return price.toFixed(4);
  if (symbol === "XAUT") return price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  if (price >= 1000) return price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  if (price >= 1) return price.toFixed(2);
  return price.toFixed(4);
}

function TickerChip({ item }: { item: TickerItem }) {
  const isUp = (item.change24h ?? 0) > 0;
  const isDown = (item.change24h ?? 0) < 0;
  const changeColor = isUp ? "#00d4aa" : isDown ? "#ef4444" : "#9ca3af";

  return (
    <span
      className="inline-flex items-center gap-2 px-4 py-0 flex-shrink-0"
      style={{ borderRight: "1px solid rgba(255,255,255,0.06)" }}
    >
      {/* Symbol */}
      <span
        className="text-xs font-bold tracking-wide"
        style={{ fontFamily: "'JetBrains Mono', monospace", color: "#e5e7eb" }}
      >
        {item.symbol}
      </span>

      {/* Price */}
      {item.loading ? (
        <span
          className="text-xs animate-pulse"
          style={{ color: "#4b5563", fontFamily: "'JetBrains Mono', monospace" }}
        >
          ···
        </span>
      ) : (
        <span
          className="text-xs font-semibold"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: "#f0f4ff" }}
        >
          {item.price !== null
            ? `${item.symbol === "XAUT" || item.symbol === "EUR/USD" ? "" : "$"}${formatPrice(item.price, item.symbol)}`
            : "—"}
        </span>
      )}

      {/* Change */}
      {!item.loading && item.change24h !== null && (
        <span
          className="inline-flex items-center gap-0.5 text-xs font-medium"
          style={{ color: changeColor, fontFamily: "'JetBrains Mono', monospace" }}
        >
          {isUp ? (
            <TrendingUp size={10} />
          ) : isDown ? (
            <TrendingDown size={10} />
          ) : (
            <Minus size={10} />
          )}
          {isUp ? "+" : ""}
          {item.change24h.toFixed(2)}%
        </span>
      )}
    </span>
  );
}

export default function TickerBar() {
  const [tickers, setTickers] = useState<TickerItem[]>(INITIAL_TICKERS);
  const [lastUpdated, setLastUpdated] = useState<string>("");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const fetchPrices = async () => {
    try {
      // Fetch crypto prices from CoinGecko
      const cryptoRes = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${CRYPTO_IDS}&vs_currencies=usd&include_24hr_change=true`,
        { signal: AbortSignal.timeout(8000) }
      );

      if (!cryptoRes.ok) throw new Error("CoinGecko API error");
      const cryptoData = await cryptoRes.json();

      // XAUT price comes from CoinGecko tether-gold (already in cryptoData)

      // Fetch EUR/USD from frankfurter
      let eurUsdPrice: number | null = null;
      let eurUsdChange: number | null = null;
      try {
        const fxRes = await fetch(
          "https://api.frankfurter.app/latest?from=EUR&to=USD",
          { signal: AbortSignal.timeout(5000) }
        );
        if (fxRes.ok) {
          const fxData = await fxRes.json();
          eurUsdPrice = fxData?.rates?.USD ?? null;
        }
      } catch {
        eurUsdPrice = null;
      }

      setTickers([
        {
          symbol: "BTC",
          name: "Bitcoin",
          price: cryptoData?.bitcoin?.usd ?? null,
          change24h: cryptoData?.bitcoin?.usd_24h_change ?? null,
          loading: false,
        },
        {
          symbol: "ETH",
          name: "Ethereum",
          price: cryptoData?.ethereum?.usd ?? null,
          change24h: cryptoData?.ethereum?.usd_24h_change ?? null,
          loading: false,
        },
        {
          symbol: "XAUT",
          name: "Tether Gold",
          price: cryptoData?.["tether-gold"]?.usd ?? null,
          change24h: cryptoData?.["tether-gold"]?.usd_24h_change ?? null,
          loading: false,
        },
        {
          symbol: "EUR/USD",
          name: "Euro / USD",
          price: eurUsdPrice,
          change24h: eurUsdChange,
          loading: false,
        },
        {
          symbol: "BNB",
          name: "BNB",
          price: cryptoData?.binancecoin?.usd ?? null,
          change24h: cryptoData?.binancecoin?.usd_24h_change ?? null,
          loading: false,
        },
        {
          symbol: "SOL",
          name: "Solana",
          price: cryptoData?.solana?.usd ?? null,
          change24h: cryptoData?.solana?.usd_24h_change ?? null,
          loading: false,
        },
      ]);

      const now = new Date();
      setLastUpdated(
        now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" })
      );
    } catch (err) {
      // On error keep existing data, just stop loading state
      setTickers((prev) =>
        prev.map((t) => ({ ...t, loading: false }))
      );
    }
  };

  useEffect(() => {
    fetchPrices();
    intervalRef.current = setInterval(fetchPrices, 30000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Duplicate tickers for seamless infinite scroll
  const displayTickers = [...tickers, ...tickers, ...tickers];

  return (
    <div
      className="w-full overflow-hidden relative z-50 select-none"
      style={{
        background: "rgba(6, 10, 20, 0.98)",
        borderBottom: "1px solid rgba(0, 212, 170, 0.15)",
        height: "36px",
      }}
    >
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, rgba(6,10,20,1), transparent)" }}
      />
      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, rgba(6,10,20,1), transparent)" }}
      />

      {/* LIVE badge */}
      <div
        className="absolute left-3 top-0 bottom-0 z-20 flex items-center gap-1.5"
      >
        <span
          className="w-1.5 h-1.5 rounded-full pulse-brand"
          style={{ background: "#00d4aa" }}
        />
        <span
          className="text-xs font-bold tracking-widest"
          style={{ color: "#00d4aa", fontFamily: "'JetBrains Mono', monospace" }}
        >
          LIVE
        </span>
      </div>

      {/* Scrolling ticker */}
      <div
        className="flex items-center h-full ticker-scroll"
        style={{ paddingLeft: "80px" }}
      >
        {displayTickers.map((item, i) => (
          <TickerChip key={`${item.symbol}-${i}`} item={item} />
        ))}
      </div>

      {/* Last updated — right side */}
      {lastUpdated && (
        <div
          className="absolute right-4 top-0 bottom-0 z-20 hidden sm:flex items-center"
        >
          <span
            className="text-xs"
            style={{ color: "#374151", fontFamily: "'JetBrains Mono', monospace" }}
          >
            {lastUpdated}
          </span>
        </div>
      )}
    </div>
  );
}
