/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */

function bestProfit(stock_prices_yesterday) {
    if (!Array.isArray(stock_prices_yesterday)) {
      return 0;
    }
    let lowHighArr = stock_prices_yesterday.reduce((acc, cur, idx) => {
      return [
        Math.min(cur, acc[0]),
        Math.max(cur, acc[1])
      ];
    }, [Number.MAX_VALUE, Number.MIN_VALUE]);
  
    let profit = lowHighArr[1] - lowHighArr[0];
  
    if (profit < 1) {
      return 0;
    }
  
    return profit;
  }

module.exports = bestProfit;
