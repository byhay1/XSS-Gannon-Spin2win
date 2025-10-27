
//Spin Control Script for Goldshell
(function() {
    // Configuration
    const TOTAL_SECTIONS = 8; // Typical number of sections on a spin wheel
    let currentTicks = 5;     // Default number of ticks to move
    let landingMode = 'exact'; // 'exact' or 'random'

    // Create control panel UI
    function createControlPanel() {
        // Remove existing panel if present
        const existingPanel = document.getElementById('spinControlPanel');
        if (existingPanel) existingPanel.remove();
        
        // Create the control panel
        const panel = document.createElement('div');
        panel.id = 'spinControlPanel';
        panel.style.position = 'fixed';
        panel.style.bottom = '100px';
        panel.style.left = '20px';
        panel.style.zIndex = '999998';
        panel.style.padding = '15px';
        panel.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        panel.style.borderRadius = '10px';
        panel.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
        panel.style.backdropFilter = 'blur(5px)';
        panel.style.minWidth = '250px';
        
        // Add title
        const title = document.createElement('h3');
        title.textContent = 'Spin Control';
        title.style.margin = '0 0 15px 0';
        title.style.color = '#ff7e5f';
        panel.appendChild(title);
        
        // Add tick slider
        const sliderContainer = document.createElement('div');
        sliderContainer.className = 'slider-container';
        
        const sliderLabel = document.createElement('label');
        sliderLabel.textContent = 'Target Section:';
        sliderLabel.style.display = 'block';
        sliderLabel.style.marginBottom = '8px';
        sliderLabel.style.fontWeight = 'bold';
        sliderContainer.appendChild(sliderLabel);
        
        const slider = document.createElement('input');
        slider.type = 'range';
        slider.min = '1';
        slider.max = TOTAL_SECTIONS;
        slider.value = currentTicks;
        slider.className = 'slider';
        slider.style.width = '100%';
        sliderContainer.appendChild(slider);
        
        const tickDisplay = document.createElement('div');
        tickDisplay.className = 'tick-display';
        tickDisplay.textContent = `Section ${currentTicks}`;
        tickDisplay.style.textAlign = 'center';
        sliderContainer.appendChild(tickDisplay);
        
        const tickExplanation = document.createElement('div');
        tickExplanation.className = 'tick-explanation';
        tickExplanation.textContent = `Each section = ${360/TOTAL_SECTIONS}° rotation`;
        tickExplanation.style.textAlign = 'center';
        sliderContainer.appendChild(tickExplanation);
        
        slider.addEventListener('input', function() {
            currentTicks = parseInt(this.value);
            tickDisplay.textContent = `Section ${currentTicks}`;
        });
        
        panel.appendChild(sliderContainer);
        
        // Add landing mode options
        const modeContainer = document.createElement('div');
        modeContainer.style.marginTop = '15px';
        
        const modeLabel = document.createElement('div');
        modeLabel.textContent = 'Landing Mode:';
        modeLabel.style.fontWeight = 'bold';
        modeLabel.style.marginBottom = '8px';
        modeContainer.appendChild(modeLabel);
        
        const modeOptions = document.createElement('div');
        modeOptions.style.display = 'flex';
        modeOptions.style.gap = '10px';
        
        const exactMode = document.createElement('button');
        exactMode.textContent = 'Exact';
        exactMode.className = 'option-btn active';
        exactMode.addEventListener('click', function() {
            landingMode = 'exact';
            exactMode.className = 'option-btn active';
            randomMode.className = 'option-btn';
        });
        
        const randomMode = document.createElement('button');
        randomMode.textContent = 'Random';
        randomMode.className = 'option-btn';
        randomMode.addEventListener('click', function() {
            landingMode = 'random';
            exactMode.className = 'option-btn';
            randomMode.className = 'option-btn active';
        });
        
        modeOptions.appendChild(exactMode);
        modeOptions.appendChild(randomMode);
        modeContainer.appendChild(modeOptions);
        
        panel.appendChild(modeContainer);
        
        // Add to page
        document.body.appendChild(panel);
        console.log('Spin control panel added!');
    }

    // Create a button to spin again
    function createSpinButton() {
        // Remove existing button if present
        const existingBtn = document.getElementById('instantSpinButton');
        if (existingBtn) existingBtn.remove();
        
        // Create the button
        const button = document.createElement('button');
        button.id = 'instantSpinButton';
        button.innerHTML = '✨ SPIN AGAIN ✨';
        button.style.position = 'fixed';
        button.style.bottom = '20px';
        button.style.left = '20px';
        button.style.zIndex = '999999';
        button.style.padding = '15px 30px';
        button.style.backgroundColor = '#fac230';
        button.style.color = '#000';
        button.style.border = 'none';
        button.style.borderRadius = '50px';
        button.style.cursor = 'pointer';
        button.style.fontWeight = 'bold';
        button.style.fontSize = '18px';
        button.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
        button.style.transition = 'all 0.3s ease';
        
        // Add hover effect
        button.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#f0b00c';
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.4)';
        });
        
        button.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#fac230';
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
        });
        
        // Add click functionality
        button.addEventListener('click', function() {
            triggerSpin(currentTicks, landingMode);
            
            // Visual feedback
            this.innerHTML = 'SPINNING...';
            this.style.backgroundColor = '#00cec9';
            
            setTimeout(() => {
                this.innerHTML = '✨ SPIN AGAIN ✨';
                this.style.backgroundColor = '#fac230';
            }, 2000);
        });
        
        // Add to page
        document.body.appendChild(button);
        console.log('Instant Spin button added! Click it to spin again.');
    }

    // Function to calculate the correct rotation for a target section
    function calculateRotation(targetSection, mode) {
        const degreesPerSection = 360 / TOTAL_SECTIONS;
        
        // Calculate the base rotation for the target section
        // The marker is at top center (0°), so we need to offset
        const baseRotation = (targetSection - 1) * degreesPerSection;
        
        // Add multiple full rotations for a natural spin effect
        const fullRotations = 5;
        const totalRotation = fullRotations * 360 + (360 - baseRotation);
        
        // Add slight randomness if in random mode
        if (mode === 'random') {
            const randomOffset = Math.random() * degreesPerSection - (degreesPerSection / 2);
            return totalRotation + randomOffset;
        }
        
        return totalRotation;
    }

    // Function to trigger the spin with controlled landing
    function triggerSpin(targetSection, mode) {
        console.log(`Attempting to trigger spin to land on section ${targetSection} in ${mode} mode`);
        
        // Calculate the exact rotation needed
        const targetRotation = calculateRotation(targetSection, mode);
        
        // Strategy 1: Try to find and modify the spin function
        const spinFunctionNames = [
            'spin', 'spinWheel', 'startSpin', 'doSpin', 'spinTheWheel',
            'goldshellSpin', 'anniversarySpin', 'wheelSpin'
        ];
        
        let spinFunctionFound = false;
        
        // Look for spin functions in global scope
        for (const funcName of spinFunctionNames) {
            if (typeof window[funcName] === 'function') {
                console.log(`Found spin function: ${funcName}`);
                
                // Store original function
                const originalFunction = window[funcName];
                
                // Replace with our controlled version
                window[funcName] = function() {
                    console.log(`Overriding ${funcName} to land on section ${targetSection}`);
                    
                    // Try to find wheel element to manipulate
                    const wheelElements = document.querySelectorAll('[class*="wheel"], [id*="wheel"]');
                    if (wheelElements.length > 0) {
                        const wheel = wheelElements[0];
                        
                        // Add spinning animation
                        wheel.style.transition = `transform 3s cubic-bezier(0.17, 0.67, 0.83, 0.67)`;
                        wheel.style.transform = `rotate(${targetRotation}deg)`;
                        
                        // Set up completion handler
                        setTimeout(() => {
                            console.log(`Spin completed, landed on section ${targetSection}`);
                            // You could trigger any post-spin logic here
                        }, 3200);
                    } else {
                        // Fallback to original function if no wheel element found
                        console.log('No wheel element found, using original function');
                        originalFunction.apply(this, arguments);
                    }
                };
                
                spinFunctionFound = true;
                break;
            }
        }
        
        // Strategy 2: Try to find and click the spin button with our function in place
        if (!spinFunctionFound) {
            console.log('No spin function found, trying to click button...');
        }
        
        const spinSelectors = [
            '.spin-button', '.btn-spin', '.wheel-button', '.spin-btn',
            '#spin-button', '#spinBtn', '#wheelSpin', '.spin-wheel-btn',
            'button[onclick*="spin"]', 'a[onclick*="spin"]',
            '[class*="spin" i]'
        ];
        
        // Try each selector
        for (const selector of spinSelectors) {
            try {
                const elements = document.querySelectorAll(selector);
                if (elements.length > 0) {
                    console.log(`Found spin button with selector: ${selector}`);
                    elements[0].click();
                    spinFunctionFound = true;
                    break;
                }
            } catch (e) {
                console.log(`Error with selector ${selector}:`, e);
            }
        }
        
        // Strategy 3: Try to find wheel element and animate it directly
        if (!spinFunctionFound) {
            console.log('No spin button found, trying to animate wheel directly...');
            
            const wheelElements = document.querySelectorAll('[class*="wheel"], [id*="wheel"]');
            if (wheelElements.length > 0) {
                const wheel = wheelElements[0];
                
                // Add spinning animation
                wheel.style.transition = `transform 3s cubic-bezier(0.17, 0.67, 0.83, 0.67)`;
                wheel.style.transform = `rotate(${targetRotation}deg)`;
                
                console.log(`Directly animating wheel to land on section ${targetSection}`);
                spinFunctionFound = true;
                
                // Set up completion handler
                setTimeout(() => {
                    console.log(`Direct spin completed, landed on section ${targetSection}`);
                    // You could trigger any post-spin logic here
                }, 3200);
            }
        }
        
        if (spinFunctionFound) {
            console.log(`Spin triggered successfully to land on section ${targetSection}!`);
        } else {
            console.log('Could not find a way to trigger the spin.');
        }
        
        return spinFunctionFound;
    }

    // Initialize the controls
    function init() {
        createControlPanel();
        createSpinButton();
        
        // Recreate controls after page load (in case of refresh)
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                createControlPanel();
                createSpinButton();
            });
        }
        
        // Also recreate when the page is shown again (after navigation)
        document.addEventListener('visibilitychange', function() {
            if (!document.hidden) {
                setTimeout(function() {
                    createControlPanel();
                    createSpinButton();
                }, 1000);
            }
        });
        
        // Monitor for URL changes (for SPA navigation)
        let lastUrl = location.href;
        const observer = new MutationObserver(function() {
            const url = location.href;
            if (url !== lastUrl) {
                lastUrl = url;
                setTimeout(function() {
                    createControlPanel();
                    createSpinButton();
                }, 1000);
            }
        });
        
        observer.observe(document, {subtree: true, childList: true});
    }

    // Start the script
    init();
})();
                
