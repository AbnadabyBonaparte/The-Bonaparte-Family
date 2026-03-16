import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";

interface ManusDialogProps {
  title?: string;
  logo?: string;
  open?: boolean;
  onLogin: () => void;
  onOpenChange?: (open: boolean) => void;
  onClose?: () => void;
}

export function ManusDialog({
  title,
  logo,
  open = false,
  onLogin,
  onOpenChange,
  onClose,
}: ManusDialogProps) {
  const [internalOpen, setInternalOpen] = useState(open);

  useEffect(() => {
    if (!onOpenChange) {
      setInternalOpen(open);
    }
  }, [open, onOpenChange]);

  const handleOpenChange = (nextOpen: boolean) => {
    if (onOpenChange) {
      onOpenChange(nextOpen);
    } else {
      setInternalOpen(nextOpen);
    }

    if (!nextOpen) {
      onClose?.();
    }
  };

  return (
    <Dialog open={onOpenChange ? open : internalOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="w-[400px] rounded-2xl border border-border bg-card p-0 text-center">
        <div className="flex flex-col items-center gap-2 p-5 pt-12">
          {logo ? (
            <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-border bg-background">
              <img src={logo} alt="Dialog graphic" className="h-10 w-10 rounded-md" loading="lazy" />
            </div>
          ) : null}

          {title ? <DialogTitle className="text-xl">{title}</DialogTitle> : null}
          <DialogDescription className="text-sm text-muted-foreground">
            Please login with Manus to continue
          </DialogDescription>
        </div>

        <DialogFooter className="px-5 py-5">
          <Button onClick={onLogin} className="h-11 w-full rounded-lg text-sm">
            Login with Manus
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
