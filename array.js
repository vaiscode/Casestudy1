var arr=[9,2,3,1,4,5,1,8];

    //To print first element and check whether its a prime number or not
function primeNumber(n) {
    if (n<2)
        return `${n} - Non Prime number`
    for (i=2;i<n;i++) {
        if (n%i==0) {
            return `${n} - Non Prime number`
        }
    }
    return `${n} - Prime number`
}
console.log(primeNumber(arr[0]));

// sum of squares
let sum=0, 
n=arr.length;
    while (n--) 
     sum+=Math.pow(arr[n],2); //sum=sum+power of nth elemet
     console.log(`Sum of squares of array elements = ${sum}`);

//Most frequent item of the array arr

n=arr.length;
m=0;
mf=1
for (i=0;i<=n;i++){
    for (j=i;j<=n;j++){
        if(arr[i]==arr[j])
            m++;
            if(mf<m){
                mf=m;
            item=arr[i];
        }
    }
    m=0;
}
console.log('Most frequent item is number ' +item);