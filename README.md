# Whisper Voice Input

A Raycast script command that records audio, transcribes it using whisper-cpp, and pastes the transcribed text back into your active application.

## Features

- Record audio for a specified duration
- Transcribe audio using OpenAI's Whisper model via whisper-cpp
- Support for multiple languages
- Automatic UTF-8 encoding handling
- Seamless integration with Raycast
- One-click paste functionality

## Prerequisites

- [Homebrew](https://brew.sh/)
- [Raycast](https://www.raycast.com/)
- macOS (for cliclick and AppleScript functionality)

## Installation

1. Install required dependencies:
```bash
brew install ffmpeg whisper-cpp terminal-notifier cliclick
```

2. Download the Whisper model:
```bash
mkdir -p ~/whisper-models
curl -L -o ~/whisper-models/ggml-medium.bin \
  https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-medium.bin
```

3. Grant Accessibility permissions for Raycast (required for cliclick & AppleScript)

4. Set up the script in Raycast:
   - Create a new Script Command
   - Set the mode to "silent"
   - Assign a hotkey
   - Copy the contents of `scripts/whisper-voice-input.sh` into the script field

## Usage

1. Press your assigned hotkey in any application
2. The script will:
   - Record audio for the specified duration
   - Transcribe the audio using whisper-cpp
   - Paste the transcribed text back into your active application

## Configuration

The script supports the following parameters:
- `-d`: Recording duration in seconds (default: 5)
- `-l`: Language code (default: "zh")
- `-m`: Path to model file
- `-t`: Temporary directory
- `-s`: Sender bundle ID

## License

MIT License 