import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import StartHere from "./pages/StartHere";
import Family from "./pages/Family";
import Life from "./pages/Life";
import Expedition from "./pages/Expedition";
import Education from "./pages/Education";
import Health from "./pages/Health";
import Faith from "./pages/Faith";
import ALSHAM from "./pages/ALSHAM";
import Work from "./pages/Work";
import Store from "./pages/Store";
import Legacy from "./pages/Legacy";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/start-here" component={StartHere} />
      <Route path="/family" component={Family} />
      <Route path="/life" component={Life} />
      <Route path="/expedition" component={Expedition} />
      <Route path="/education" component={Education} />
      <Route path="/health" component={Health} />
      <Route path="/faith" component={Faith} />
      <Route path="/alsham" component={ALSHAM} />
      <Route path="/work" component={Work} />
      <Route path="/store" component={Store} />
      <Route path="/legacy" component={Legacy} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
