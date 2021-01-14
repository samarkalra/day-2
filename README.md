## Day1-Task3

The third task for Day one.

### Requirements: 

1.) Computing the result of a function only when it is called for output. <br/>
2.) Use the already calculated results in the subsequent to-be computed functions. <br/>
3.) Not computing results for function after it has been already calculated in any previous command. <br/>

### Approach:

1.) The code is divided into multiple function, each function associated with a specific command. <br/>
2.) Each to-be calculated value has a variable declared for it to idetify if it is already calculated. <br/>
3.) In UP and DOWN, if UP is already calculated then DOWN is calculated by reversing the result of UP, bringing down the time complexity from O(nlogn) to O(n), where is n is the number of elements in input array and vice versa. <br/>
4.) If UP or DOWN have been already calculated, the min and max are calculated in O(1) or constant time, for example if have UP, i.e, array in ascending order, the min is found by returning the first element of UP's result. <br/>
5.) The result of mean is used (if present) in Standard deviation function. <br/>
6.) The result of sum is used (if present) in mean function. <br/>
7. ) If UP or DOWN have been already calculated, it has been used in the median function. <br/>
