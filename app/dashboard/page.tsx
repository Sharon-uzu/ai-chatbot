"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import {
  LayoutDashboard,
  MessageSquare,
  Bot,
  Settings,
  BarChart3,
  Users,
  Zap,
  Plus,
  ChevronRight,
  ArrowUpRight,
  Menu,
  Bell,
  Search,
  Sparkles,
  Loader2
} from "lucide-react";
import { useRouter } from "next/navigation";

interface AvatarProps {
  name: string;
  size?: number;
}



const NAV_ITEMS = [
  { icon: LayoutDashboard, label: "Overview", id: "overview", active: true },
  { icon: MessageSquare, label: "Conversations", id: "conversations", badge: "24" },
  { icon: Bot, label: "My Bots", id: "bots" },
  { icon: BarChart3, label: "Analytics", id: "analytics" },
  { icon: Users, label: "Contacts", id: "contacts" },
  { icon: Settings, label: "Settings", id: "settings" },
];

const STATS = [
  { label: "Conversations", value: "12,842", change: "+12%", positive: true, icon: MessageSquare, color: "#6ee7b7", bg: "rgba(110,231,183,0.08)" },
  { label: "Active Bots", value: "3", change: "Stable", positive: null, icon: Bot, color: "#93c5fd", bg: "rgba(147,197,253,0.08)" },
  { label: "Avg. Response", value: "1.2s", change: "-0.4s", positive: true, icon: Zap, color: "#fde68a", bg: "rgba(253,230,138,0.08)" },
  { label: "Satisfaction", value: "98.2%", change: "+2.1%", positive: true, icon: Sparkles, color: "#c4b5fd", bg: "rgba(196,181,253,0.08)" },
];

const INQUIRIES = [
  { user: "Sarah J.", msg: "How do I upgrade my plan?", time: "2m ago", status: "new" },
  { user: "Mike R.", msg: "Pricing for enterprise?", time: "15m ago", status: "new" },
  { user: "Kevin L.", msg: "API documentation link?", time: "1h ago", status: "read" },
  { user: "Anna W.", msg: "Reset my password", time: "3h ago", status: "read" },
  { user: "Liam S.", msg: "Can I get a refund?", time: "5h ago", status: "read" },
];

const BOTS = [
  { name: "SupportBot", conversations: 8421, status: "online", color: "#6ee7b7" },
  { name: "SalesBot", conversations: 3120, status: "online", color: "#93c5fd" },
  { name: "OnboardBot", conversations: 1301, status: "idle", color: "#fde68a" },
];

const BARS = [38, 62, 45, 88, 70, 83, 95];
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];



function Avatar({ name, size = 9 }: AvatarProps) {
  const initials = name.split(" ").map((n) => n[0]).join("");
  const colors = ["#6ee7b7", "#93c5fd", "#fde68a", "#c4b5fd", "#f9a8d4"];
  const idx = name.charCodeAt(0) % colors.length;




  return (
    <div
      style={{
        width: `${size * 4}px`,
        height: `${size * 4}px`,
        borderRadius: "50%",
        background: `${colors[idx]}18`,
        border: `1.5px solid ${colors[idx]}40`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "11px",
        fontWeight: 700,
        color: colors[idx],
        fontFamily: "'DM Mono', monospace",
        flexShrink: 0,
      }}
    >
      {initials}
    </div>
  );
}

export default function Dashboard() {
  const [activeNav, setActiveNav] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

    const [userName, setUserName] = useState("User");

      const router = useRouter();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        router.push("/login");
      } else {
        // Retrieve the full name from user_metadata (set during sign up)
        const name = session.user.user_metadata.full_name || "User";
        setUserName(name);
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <Loader2 className="animate-spin text-blue-500" size={40} />
      </div>
    );
  }


  return (
    <>
      <style>{`
       
        .dash-root {
          display: flex;
          min-height: 100vh;
          background: #08090d;
          color: #e2e8f0;
          font-family: 'Syne', sans-serif;
          overflow: hidden;
        }

        /* ── SIDEBAR ── */
        .sidebar {
          width: 228px;
          flex-shrink: 0;
          background: #0d0f17;
          border-right: 1px solid rgba(255,255,255,0.06);
          display: flex;
          flex-direction: column;
          padding: 28px 16px;
          gap: 8px;
          position: relative;
          z-index: 30;
          transition: transform 0.3s ease;
        }

        .sidebar-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0 8px;
          margin-bottom: 28px;
        }

        .logo-icon {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          background: linear-gradient(135deg, #6ee7b7 0%, #3b82f6 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-text {
          font-size: 17px;
          font-weight: 800;
          letter-spacing: -0.4px;
          color: #f1f5f9;
        }

        .logo-text span { color: #3b82f6; }

        .nav-section-label {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
          padding: 0 12px;
          margin: 8px 0 4px;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 10px 12px;
          border-radius: 10px;
          cursor: pointer;
          font-size: 13.5px;
          font-weight: 500;
          color: rgba(255,255,255,0.45);
          border: 1px solid transparent;
          transition: all 0.15s ease;
          text-decoration: none;
          position: relative;
        }

        .nav-item:hover {
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.8);
        }

        .nav-item.active {
          background: rgba(110,231,183,0.07);
          border-color: rgba(110,231,183,0.15);
          color: #3b82f6;
        }

        .nav-badge {
          margin-left: auto;
          font-size: 10px;
          font-weight: 600;
          background: rgba(110,231,183,0.15);
          color: #6ee7b7;
          padding: 1px 7px;
          border-radius: 20px;
          font-family: 'DM Mono', monospace;
        }

        .sidebar-bottom {
          margin-top: auto;
          border-top: 1px solid rgba(255,255,255,0.06);
          padding-top: 16px;
        }

        .user-card {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 10px;
          cursor: pointer;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.02);
          transition: all 0.15s ease;
        }

        .user-card:hover { background: rgba(255,255,255,0.05); }

        .user-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6ee7b7 0%, #3b82f6 100%);
          flex-shrink: 0;
        }

        .user-info { flex: 1; min-width: 0; }
        .user-name { font-size: 12.5px; font-weight: 600; color: #e2e8f0; }
        .user-role { font-size: 10.5px; color: rgba(255,255,255,0.35); }

        /* ── MAIN ── */
        .main {
          flex: 1;
          overflow-y: auto;
          overflow-x: hidden;
          display: flex;
          flex-direction: column;
        }

        /* ── TOPBAR ── */
        .topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 32px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          background: #08090d;
          position: sticky;
          top: 0;
          z-index: 10;
          gap: 16px;
        }

        .topbar-left {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .topbar-title {
          font-size: 18px;
          font-weight: 700;
          letter-spacing: -0.3px;
          color: #f1f5f9;
        }

        .topbar-sub {
          font-size: 12px;
          color: rgba(255,255,255,0.35);
          font-family: 'DM Mono', monospace;
        }

        .topbar-right {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 10px;
          padding: 8px 14px;
          font-size: 13px;
          color: rgba(255,255,255,0.35);
          cursor: pointer;
          transition: all 0.15s;
          font-family: 'Syne', sans-serif;
        }

        .search-box:hover { background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.5); }

        .icon-btn {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: rgba(255,255,255,0.45);
          transition: all 0.15s;
          position: relative;
        }

        .icon-btn:hover { background: rgba(255,255,255,0.07); color: rgba(255,255,255,0.7); }

        .notif-dot {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6ee7b7 0%, #3b82f6 100%);;
          border: 1.5px solid #08090d;
        }

        .new-bot-btn {
          display: flex;
          align-items: center;
          gap: 7px;
          background: linear-gradient(135deg, #6ee7b7 0%, #3b82f6 100%);;
          color: #0a1a14;
          border: none;
          border-radius: 10px;
          padding: 9px 16px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.15s;
          font-family: 'Syne', sans-serif;
          white-space: nowrap;
        }

        .new-bot-btn:hover { background: #a7f3d0; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(110,231,183,0.25); }

        .menu-btn {
          display: none;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: rgba(255,255,255,0.6);
        }

        /* ── CONTENT ── */
        .content { padding: 28px 32px; display: flex; flex-direction: column; gap: 24px; }

        /* ── STATS GRID ── */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .stat-card {
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.06);
          padding: 22px;
          background: #0d0f17;
          transition: border-color 0.15s;
          cursor: default;
        }

        .stat-card:hover { border-color: rgba(255,255,255,0.12); }

        .stat-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }

        .stat-icon {
          width: 36px;
          height: 36px;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-badge {
          font-size: 10.5px;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: 20px;
          font-family: 'DM Mono', monospace;
        }

        .stat-label {
          font-size: 11.5px;
          color: rgba(255,255,255,0.4);
          margin-bottom: 4px;
          letter-spacing: 0.2px;
        }

        .stat-value {
          font-size: 26px;
          font-weight: 800;
          letter-spacing: -1px;
          color: #f1f5f9;
        }

        /* ── BOTTOM GRID ── */
        .bottom-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 16px;
        }

        .panel {
          background: #0d0f17;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          padding: 24px;
        }

        .panel-wide { grid-column: span 2; }

        .panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .panel-title {
          font-size: 14.5px;
          font-weight: 700;
          color: #f1f5f9;
          letter-spacing: -0.2px;
        }

        .panel-select {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          padding: 5px 10px;
          font-size: 11.5px;
          color: rgba(255,255,255,0.5);
          font-family: 'Syne', sans-serif;
          cursor: pointer;
          outline: none;
        }

        /* Chart */
        .chart-area {
          height: 160px;
          display: flex;
          align-items: flex-end;
          gap: 10px;
        }

        .bar-wrap {
          flex: 1;
          height: 100%;
          display: flex;
          align-items: flex-end;
          position: relative;
        }

        .bar-bg {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 100%;
          border-radius: 6px 6px 0 0;
          background: rgba(110,231,183,0.05);
        }

        .bar-fill {
          position: absolute;
          bottom: 0;
          width: 100%;
          border-radius: 6px 6px 0 0;
          background: linear-gradient(180deg, #6ee7b7 0%, #3b82f6 100%);
          transition: height 0.4s ease;
          opacity: 0.85;
        }

        .bar-wrap:hover .bar-fill { opacity: 1; }

        .chart-labels {
          display: flex;
          gap: 10px;
          margin-top: 12px;
        }

        .chart-label {
          flex: 1;
          text-align: center;
          font-size: 10.5px;
          color: rgba(255,255,255,0.25);
          font-family: 'DM Mono', monospace;
        }

        /* Bots list */
        .bot-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          cursor: pointer;
          transition: all 0.15s;
        }

        .bot-item:last-child { border-bottom: none; padding-bottom: 0; }
        .bot-item:hover .bot-name { color: #6ee7b7; }

        .bot-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .bot-name {
          font-size: 13px;
          font-weight: 600;
          color: #e2e8f0;
          transition: color 0.15s;
          flex: 1;
        }

        .bot-count {
          font-size: 11px;
          color: rgba(255,255,255,0.3);
          font-family: 'DM Mono', monospace;
        }

        .bot-status {
          font-size: 10px;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 20px;
          font-family: 'DM Mono', monospace;
        }

        /* Inquiries */
        .inquiry-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 9px 0;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          cursor: pointer;
          transition: all 0.15s;
        }

        .inquiry-item:last-child { border-bottom: none; }

        .inquiry-msg {
          font-size: 11.5px;
          color: rgba(255,255,255,0.4);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          flex: 1;
          min-width: 0;
        }

        .inquiry-time {
          font-size: 10px;
          color: rgba(255,255,255,0.2);
          font-family: 'DM Mono', monospace;
          flex-shrink: 0;
        }

        .new-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #6ee7b7;
          flex-shrink: 0;
        }

        .view-all-btn {
          width: 100%;
          margin-top: 16px;
          padding: 10px;
          border: 1px dashed rgba(255,255,255,0.1);
          border-radius: 10px;
          background: none;
          color: rgba(255,255,255,0.3);
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.15s;
          font-family: 'Syne', sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .view-all-btn:hover { color: #6ee7b7; border-color: rgba(110,231,183,0.25); background: rgba(110,231,183,0.04); }

        /* Overlay for mobile sidebar */
        .sidebar-overlay {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.7);
          z-index: 20;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .bottom-grid { grid-template-columns: 1fr 1fr; }
          .panel-wide { grid-column: span 2; }
        }

        @media (max-width: 768px) {
          .sidebar {
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            transform: translateX(-100%);
          }
          .sidebar.open { transform: translateX(0); }
          .sidebar-overlay.open { display: block; }
          .menu-btn { display: flex; }
          .search-box { display: none; }
          .topbar { padding: 16px 20px; }
          .content { padding: 20px; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
          .bottom-grid { grid-template-columns: 1fr; }
          .panel-wide { grid-column: span 1; }
        }

        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr 1fr; gap: 10px; }
          .stat-value { font-size: 22px; }
          .new-bot-btn span { display: none; }
        }

        /* Scrollbar */
        .main::-webkit-scrollbar { width: 5px; }
        .main::-webkit-scrollbar-track { background: transparent; }
        .main::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 99px; }
      `}</style>

      <div className="dash-root">
        {/* Sidebar overlay (mobile) */}
        <div
          className={`sidebar-overlay ${sidebarOpen ? "open" : ""}`}
          onClick={() => setSidebarOpen(false)}
        />

        {/* ── SIDEBAR ── */}
        <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <div className="sidebar-logo">
            <div className="logo-icon">
              <Bot size={18} color="#0a1a14" />
            </div>
            <span className="logo-text">Smart<span>FlowAI</span></span>
          </div>

          <span className="nav-section-label">Main</span>
          {NAV_ITEMS.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className={`nav-item ${activeNav === item.id ? "active" : ""}`}
              onClick={() => { setActiveNav(item.id); setSidebarOpen(false); }}
            >
              <item.icon size={16} />
              {item.label}
              {item.badge && <span className="nav-badge">{item.badge}</span>}
            </div>
          ))}

          <span className="nav-section-label" style={{ marginTop: 12 }}>Manage</span>
          {NAV_ITEMS.slice(4).map((item) => (
            <div
              key={item.id}
              className={`nav-item ${activeNav === item.id ? "active" : ""}`}
              onClick={() => { setActiveNav(item.id); setSidebarOpen(false); }}
            >
              <item.icon size={16} />
              {item.label}
            </div>
          ))}

          <div className="sidebar-bottom">
            <div className="user-card">
              <div className="user-avatar" />
              <div className="user-info">
                <div className="user-name">{userName}</div>
                <div className="user-role">Pro Plan</div>
              </div>
              <ChevronRight size={14} style={{ color: "rgba(255,255,255,0.2)", flexShrink: 0 }} />
            </div>
          </div>
        </aside>

        {/* ── MAIN ── */}
        <main className="main">
          {/* Topbar */}
          <div className="topbar">
            <div style={{ gap: 12 }} className="flex items-start md:items-center">
              <button className="menu-btn" onClick={() => setSidebarOpen(true)}>
                <Menu size={18} />
              </button>
              <div className="topbar-left">
                <div className="topbar-title">Good morning, {userName} ✦</div>
                <div className="topbar-sub">Friday, March 13 · 3 bots active</div>
              </div>
            </div>
            <div className="topbar-right">
              <div className="search-box">
                <Search size={14} />
                Search anything…
              </div>
              <div className="icon-btn">
                <Bell size={16} />
                <div className="notif-dot" />
              </div>
              <button className="new-bot-btn">
                <Plus size={15} />
                <span>New Bot</span>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="content">
            {/* Stats */}
            <div className="stats-grid">
              {STATS.map((s, i) => (
                <div className="stat-card" key={i}>
                  <div className="stat-top">
                    <div className="stat-icon" style={{ background: s.bg }}>
                      <s.icon size={16} color={s.color} />
                    </div>
                    <span
                      className="stat-badge"
                      style={{
                        background: s.positive === true
                          ? "rgba(110,231,183,0.1)"
                          : s.positive === false
                          ? "rgba(248,113,113,0.1)"
                          : "rgba(255,255,255,0.06)",
                        color: s.positive === true
                          ? "#6ee7b7"
                          : s.positive === false
                          ? "#f87171"
                          : "rgba(255,255,255,0.3)",
                      }}
                    >
                      {s.change}
                    </span>
                  </div>
                  <div className="stat-label">{s.label}</div>
                  <div className="stat-value">{s.value}</div>
                </div>
              ))}
            </div>

            {/* Bottom panels */}
            <div className="bottom-grid">
              {/* Chart */}
              <div className="panel panel-wide">
                <div className="panel-header">
                  <span className="panel-title">Conversation Volume</span>
                  <select className="panel-select">
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                  </select>
                </div>
                <div className="chart-area">
                  {BARS.map((h, i) => (
                    <div className="bar-wrap" key={i}>
                      <div className="bar-bg" />
                      <div className="bar-fill" style={{ height: `${h}%` }} />
                    </div>
                  ))}
                </div>
                <div className="chart-labels">
                  {DAYS.map((d) => (
                    <div className="chart-label" key={d}>{d}</div>
                  ))}
                </div>
              </div>

              {/* Right column: bots + inquiries stacked */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {/* Active Bots */}
                <div className="panel" style={{ flex: "0 0 auto" }}>
                  <div className="panel-header" style={{ marginBottom: 16 }}>
                    <span className="panel-title">Active Bots</span>
                    <ArrowUpRight size={15} style={{ color: "rgba(255,255,255,0.25)" }} />
                  </div>
                  {BOTS.map((bot, i) => (
                    <div className="bot-item" key={i}>
                      <div
                        className="bot-dot"
                        style={{
                          background: bot.status === "online" ? "#6ee7b7" : "#fde68a",
                          boxShadow: bot.status === "online"
                            ? "0 0 6px rgba(110,231,183,0.7)"
                            : "0 0 6px rgba(253,230,138,0.5)",
                        }}
                      />
                      <span className="bot-name">{bot.name}</span>
                      <span className="bot-count">{bot.conversations.toLocaleString()}</span>
                      <span
                        className="bot-status"
                        style={{
                          background: bot.status === "online"
                            ? "rgba(110,231,183,0.1)"
                            : "rgba(253,230,138,0.1)",
                          color: bot.status === "online" ? "#6ee7b7" : "#fde68a",
                        }}
                      >
                        {bot.status}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Recent Inquiries */}
                <div className="panel" style={{ flex: 1 }}>
                  <div className="panel-header" style={{ marginBottom: 12 }}>
                    <span className="panel-title">Recent Inquiries</span>
                  </div>
                  {INQUIRIES.map((item, i) => (
                    <div className="inquiry-item" key={i}>
                      <Avatar name={item.user} size={8} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 12.5, fontWeight: 600, color: "#e2e8f0", marginBottom: 1 }}>
                          {item.user}
                        </div>
                        <div className="inquiry-msg">{item.msg}</div>
                      </div>
                      {item.status === "new" && <div className="new-dot" />}
                      <div className="inquiry-time">{item.time}</div>
                    </div>
                  ))}
                  <button className="view-all-btn">
                    View all <ArrowUpRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}