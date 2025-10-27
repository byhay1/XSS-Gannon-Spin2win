# Analysis of the Spin2WinWheel Code
BIG NOTE! I sent this to the marketing team at goldshell and they ignored me. 

This code is for a "fortune wheel" or "spin-to-win" plugin, often used in marketing campaigns (e.g., coupon wheels, giveaway promotions). The wheel is segmented, and each segment has a value (coupon, discount, prize, etc.). However, the outcome is not truly random and is often controlled by the site owner.

## Key points:
1. Controlled Outcomes via spinDestinationArray
javascript
B = t.spinDestinationArray
If B (the spinDestinationArray) is provided, the wheel will forcefully land on predetermined segments in sequence. This is not random.

2. Probability-Based Spins
javascript
`Yt = function() {
  gt = !0,
  x.forEach(function(t, e) {
    isNaN(t.probability) && (gt = !1)
  }),
  gt && (B = [], b = -1 == t.numSpins ? 1e16 : parseInt(t.numSpins), Lt())
}`
If probability values are set for each segment, the wheel uses a probability system to determine outcomes. This is also not truly random—it’s weighted.

3. No True Randomness
Even when neither spinDestinationArray nor probability is used, the "random" spin uses:

javascript
`Nt = function() {
  return -S * vt(0, T) - 1080 * ot
}`
This uses Math.random(), which is pseudo-random and can be manipulated or predicted in a controlled environment.

4. Server-Side Control
The function `myResult(t)` makes an AJAX call to:

javascript
`jQuery.post(fortunewheel_wheel_spin.ajax_url, data, function(response) { ... }`
This suggests that the final outcome may be validated or overridden server-side, meaning the front-end spin is just for show.

## Conclusion
This wheel is not a game of chance in the traditional sense. It is a marketing tool where the site owner can:
- Predefine the outcome sequence
- Weight segments to favor certain results
- Validate or override results via server-side logic

There is no "win con" in the sense of a fair game—it’s a controlled experience designed for user engagement and lead generation.
