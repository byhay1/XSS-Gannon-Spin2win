# Goldshell Spin Wheel Control Tool
A browser-based tool that allows you to bypass daily spin limits and control the outcome of the Goldshell anniversary spin wheel.

## Features
🎯 Precise Control: Land on any section of the spin wheel (1-8)

🔄 Bypass Limits: Spin unlimited times regardless of daily restrictions

🎲 Landing Modes: Choose between exact or randomized landing

🎨 User-Friendly: Clean interface with visual controls

🔧 Persistent: Controls remain active even after page refresh

## Quick Start
### Method 1: Direct Console Injection (Recommended)
- Navigate to the Goldshell anniversary page
Go to: https://www.goldshell.com/6th-annivasary/
- Open Developer Tools
Press F12 or Ctrl+Shift+I (Windows) / Cmd+Option+I (Mac)
- Or right-click and select "Inspect"
- Go to the Console tab
- Click on the "Console" tab in Developer Tools
- Paste and execute the code

## javascript
// Copy the entire code from the gs-xss-spin-control.js file
// Paste it in the console and press Enter

- A control panel will appear in the bottom-left corner
- Use the slider to select your target section (1-8)
- Choose between "Exact" or "Random" landing mode
- Click "SPIN AGAIN" to trigger the spin

### Method 2: HTML File Method
- Save the complete HTML code
- Copy the entire HTML from gs-spin-control.html
- Save it as goldshell_spin_control.html on your computer
- Open the HTML file
- Double-click the saved file to open it in your browser
- Copy the script code
- Click the "Copy Fixed Spin Control Code" button
- Follow step 'Method 1'

## Control Panel Features
Section Selection
Slider: Drag to select sections 1-8
Display: Shows current target section
Explanation: Each section = 45° rotation
Landing Modes
Exact Mode: Lands precisely on the selected section
Random Mode: Adds slight randomness within the section for natural appearance
Spin Button
Position: Fixed at bottom-left of screen
Persistent: Remains active across page navigation
Technical Details

## How It Works
Function Override: Intercepts and replaces the original spin functions
Direct Animation: Manipulates the wheel element's CSS transform
Event Simulation: Triggers click events on existing spin buttons
Storage Bypass: Clears local storage and cookies that track spin limits

## Browser Compatibility
✅ Chrome 80+
✅ Firefox 75+
✅ Safari 13+
✅ Edge 80+

## Security Notes
No eval(): Script is CSP-compliant and safe to run
Client-Side Only: Runs entirely in your browser
No Data Collection: Doesn't send any data to external servers

## Troubleshooting
Common Issues
"Content Security Policy blocks the use of 'eval'"
Controls don't appear after refresh
Solution: The script automatically recreates controls on page load

## Wheel doesn't spin

Try switching between "Exact" and "Random" modes
Ensure you're on the correct Goldshell anniversary page
Check console for error messages

Only lands on sections 1-2

✅ Fixed in current version with proper rotation calculation

### Debug Steps
Check Console Errors
Open Developer Tools → Console
Look for red error messages
Verify Page Context
Ensure you're on: https://www.goldshell.com/6th-annivasary/
Clear Browser Data
Clear cookies and cache for the Goldshell site
Try incognito/private mode

## ⚠️Legal & Ethical Considerations⚠️
### ⚠️ Important Disclaimer
This tool is for educational purposes only
Use at your own risk
Respect website terms of service
May violate Goldshell's usage policies
Intended for learning about web technologies
Console script - JavaScript code for direct injection




Note: This tool demonstrates browser automation techniques and should be used responsibly. Always respect website terms of service and use for legitimate educational purposes.
