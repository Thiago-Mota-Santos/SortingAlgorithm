let customGap = [700, 300, 132, 57, 23, 10, 4 , 1];
let vet = [3,5,8,1,3,9,1,10,12,5];
function shellSortWithCustomGaps(vet) {
	let n = vet.length;

	
	for (let gapIndex = 0; gapIndex < customGap.length; gapIndex++)
	{
		let gap = customGap[gapIndex];
		
		for (let i = gap; i < n; i += 1)
		{
		
			let temp = vet[i];
			
		
			let j;
			for (j = i; j >= gap && vet[j-gap] > temp; j-=gap)
			{
				vet[j] = vet[j-gap];
			}

			vet[j] = temp;
		}
	}

	return vet;
}


console.log(shellSortWithCustomGaps(vet))