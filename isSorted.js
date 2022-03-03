function isSorted(arr,length)
{

    if(length <=2  || descSorted(arr,length) || ascSorted(arr,length))
    {
        return true;
    }
    
 return false;
}
    

function descSorted(arr , length)
{
for(let i =1 ; i < length ; i++)
{
if(arr[i] < arr[i+1])
{
    return false;
}
}
return true;

}


function ascSorted(arr , length) 
{
for(let i =1 ; i < length ; i++)
{
if(arr[i-1] > arr[i])
{
    return false;
}
}
return true;

}

module.exports =
 {
    isSorted
}
;







//////////////

module.exports =
 {
    isSorted
}
;