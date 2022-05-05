Two Number Sum 
--------------

problem : 
find sum of two number of given array to m number

arr [-1,6,-4,2,7,3,14,9,5] , m = 10

x + y = m 

7 + 3 = 10

solution : 2 loop 
take one element sum up with all elements 
Time : O(n2)

for i =0 ; i < arr.len ; i++
    for j = 0 ; j < arr.len ; j ++
        sum =arr[i] + arr[j]
        if(i + j)
            skip
        elif sum = m 
         return 'Your 2 number {arr i} , {arr j}'

-------------------------------------------------------

solution 
