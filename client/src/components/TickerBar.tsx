/**
 * TickerBar — Cipher SMC
 * Design: Institutional Edge — live price ticker bar at top of page
 * Fetches top 20 market cap coins from CoinGecko, filters stablecoins & meme coins
 * Refreshes every 60 seconds
 */
import { useEffect, useState, useRef } from "react";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface TickerItem {
  symbol: string;
  price: number;
  change24h: number;
}

// Coins to exclude: stablecoins and meme coins
const EXCLUDE_IDS = new Set([
  // Stablecoins
  "tether", "usd-coin", "dai", "binance-usd", "true-usd", "usdd",
  "frax", "pax-dollar", "gemini-dollar", "liquity-usd", "fei-usd",
  "nusd", "usdn", "husd", "usdp", "celo-dollar", "terrausd",
  "first-digital-usd", "ethena-usde", "paypal-usd",
  // Meme coins
  "dogecoin", "shiba-inu", "pepe", "floki", "bonk", "dogwifcoin",
  "memecoin", "baby-doge-coin", "dogelon-mars", "samoyedcoin",
  "kishu-inu", "akita-inu", "hoge-finance", "pitbull",
  "catecoin", "meme", "wojak", "turbo",
]);

// Format price with appropriate decimals
function formatPrice(price: number): string {
  if (price >= 10000) return price.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  if (price >= 1000) return price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  if (price >= 1) return price.toFixed(2);
  if (price >= 0.01) return price.toFixed(4);
  return price.toFixed(6);
}

function TickerChip({ item }: { item: TickerItem }) {
  const isUp = item.change24h > 0;
  const isDown = item.change24h < 0;
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
      <span
        className="text-xs font-semibold"
        style={{ fontFamily: "'JetBrains Mono', monospace", color: "#f0f4ff" }}
      >
        ${formatPrice(item.price)}
      </span>

      {/* Change */}
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
    </span>
  );
}

// Loading placeholder chips
function LoadingChips() {
  const placeholders = ["BTC", "ETH", "BNB", "SOL", "XRP", "ADA", "AVAX", "DOT", "LINK", "MATIC"];
  return (
    <>
      {placeholders.map((sym) => (
        <span
          key={sym}
          className="inline-flex items-center gap-2 px-4 py-0 flex-shrink-0"
          style={{ borderRight: "1px solid rgba(255,255,255,0.06)" }}
        >
          <span
            className="text-xs font-bold tracking-wide"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: "#e5e7eb" }}
          >
            {sym}
          </span>
          <span
            className="text-xs animate-pulse"
            style={{ color: "#4b5563", fontFamily: "'JetBrains Mono', monospace" }}
          >
            ···
          </span>
        </span>
      ))}
    </>
  );
}

export default function TickerBar() {
  const [tickers, setTickers] = useState<TickerItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<string>("");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const fetchPrices = async () => {
    try {
      // Fetch top 50 by market cap to ensure we get enough after filtering
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=24h",
        { signal: AbortSignal.timeout(10000) }
      );

      if (!res.ok) throw new Error("CoinGecko API error");
      const data: Array<{
        id: string;
        symbol: string;
        current_price: number;
        price_change_percentage_24h: number;
      }> = await res.json();

      // Filter out stablecoins and meme coins, take top 20 remaining
      const filtered = data
        .filter((coin) => !EXCLUDE_IDS.has(coin.id))
        .slice(0, 20)
        .map((coin) => ({
          symbol: coin.symbol.toUpperCase(),
          price: coin.current_price,
          change24h: coin.price_change_percentage_24h ?? 0,
        }));

      setTickers(filtered);
      setLoading(false);

      const now = new Date();
      setLastUpdated(
        now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" })
      );
    } catch {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrices();
    intervalRef.current = setInterval(fetchPrices, 60000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Duplicate tickers for seamless infinite scroll
  const displayTickers = loading ? null : [...tickers, ...tickers, ...tickers];

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
      <div className="absolute left-3 top-0 bottom-0 z-20 flex items-center gap-1.5">
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
        {loading ? (
          <LoadingChips />
        ) : (
          displayTickers?.map((item, i) => (
            <TickerChip key={`${item.symbol}-${i}`} item={item} />
          ))
        )}
      </div>

      {/* Last updated — right side */}
      {lastUpdated && (
        <div className="absolute right-4 top-0 bottom-0 z-20 hidden sm:flex items-center">
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
