import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

const Home       = lazy(() => import("./pages/Home"));
const StartHere  = lazy(() => import("./pages/StartHere"));
const Family     = lazy(() => import("./pages/Family"));
const Life       = lazy(() => import("./pages/Life"));
const Expedition = lazy(() => import("./pages/Expedition"));
const Education  = lazy(() => import("./pages/Education"));
const Health     = lazy(() => import("./pages/Health"));
const Faith      = lazy(() => import("./pages/Faith"));
const ALSHAM     = lazy(() => import("./pages/ALSHAM"));
const Work       = lazy(() => import("./pages/Work"));
const Store      = lazy(() => import("./pages/Store"));
const Legacy     = lazy(() => import("./pages/Legacy"));
const Laurice    = lazy(() => import("./pages/Laurice"));
const Journal    = lazy(() => import("./pages/Journal"));
const Escrever   = lazy(() => import("./pages/Escrever"));
const NotFound   = lazy(() => import("./pages/NotFound"));

function Router() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <Switch>
        <Route path="/"           component={Home} />
        <Route path="/start-here" component={StartHere} />
        <Route path="/family"     component={Family} />
        <Route path="/life"       component={Life} />
        <Route path="/expedition" component={Expedition} />
        <Route path="/education"  component={Education} />
        <Route path="/health"     component={Health} />
        <Route path="/faith"      component={Faith} />
        <Route path="/alsham"     component={ALSHAM} />
        <Route path="/work"       component={Work} />
        <Route path="/store"      component={Store} />
        <Route path="/legacy"     component={Legacy} />
        <Route path="/laurice"    component={Laurice} />
        <Route path="/journal"    component={Journal} />
        <Route path="/escrever"   component={Escrever} />
        <Route path="/404"        component={NotFound} />
        <Route                    component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <TooltipProvider>
          <Toaster />
          <Router />
          <a
            href="https://wa.me/5562992428800"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            style={{
              position: "fixed", bottom: "2rem", right: "2rem", zIndex: 100,
              width: "52px", height: "52px", borderRadius: "50%",
              background: "#E9741C", color: "#F8F7F1",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 20px rgba(233,116,28,0.4)",
              transition: "transform 200ms",
              textDecoration: "none",
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "scale(1.1)"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "scale(1)"}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="#F8F7F1">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.374 0 0 5.373 0 12c0 2.108.548 4.088 1.504 5.813L.057 23.457a1 1 0 001.218 1.218l5.693-1.483A11.953 11.953 0 0012 24c6.626 0 12-5.374 12-12S18.626 0 12 0zm0 22c-1.885 0-3.655-.51-5.177-1.396l-.361-.214-3.734.973.998-3.646-.234-.374A9.953 9.953 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
            </svg>
          </a>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
