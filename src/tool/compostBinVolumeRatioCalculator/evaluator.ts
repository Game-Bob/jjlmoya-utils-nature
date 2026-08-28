import type { CompostResult } from "./logic";

export type DiagnosticTone = "good" | "caution" | "alert";

export interface CompostDiagnostic {
  key: string;
  tone: DiagnosticTone;
}

export function getDiagnostics(result: CompostResult): CompostDiagnostic[] {
  const diagnostics: CompostDiagnostic[] = [
    {
      key: result.status,
      tone: result.status === "balanced" ? "good" : "caution",
    },
  ];
  if (result.moistureStatus !== "good") {
    diagnostics.push({
      key: result.moistureStatus,
      tone: result.moistureStatus === "dry" ? "caution" : "alert",
    });
  }
  if (result.status === "overfilled")
    diagnostics[0] = { key: result.status, tone: "alert" };
  return diagnostics;
}
