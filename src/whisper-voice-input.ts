import { exec } from "child_process";
import { showToast, Toast } from "@raycast/api";
import { promisify } from "util";
import { join } from "path";

const execAsync = promisify(exec);

export default async function Command() {
  try {
    // Get the absolute path to the shell script
    const scriptPath = join(__dirname, "whisper-voice-input.sh");
    
    // Execute the shell script
    const { stdout, stderr } = await execAsync(`bash "${scriptPath}"`);
    
    if (stderr) {
      await showToast({
        style: Toast.Style.Failure,
        title: "Error",
        message: stderr,
      });
      return;
    }

    await showToast({
      style: Toast.Style.Success,
      title: "Success",
      message: "Voice input processed successfully",
    });
  } catch (error) {
    await showToast({
      style: Toast.Style.Failure,
      title: "Error",
      message: error instanceof Error ? error.message : "Unknown error occurred",
    });
  }
} 