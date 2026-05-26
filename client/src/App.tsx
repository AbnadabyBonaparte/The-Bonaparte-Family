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
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
