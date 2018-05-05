
function find_related(idx, table) //idx is the index of professor 1
{
	var relation_array = [];
	for ( var i = 0; i < 115; i ++ ) 
	{
		if (i != idx) 
		{
			if (table[i].R1 == table[idx].R1 || table[i].R1 == table[idx].R2 || table[i].R1 == table[idx].R3 || table[i].R1 == table[idx].R4 || table[i].R1 == table[idx].R5)
			{
				relation_array.push(i);
				relation_array.push(table[i].R1);
				continue;
			}

			if (table[i].R2 == table[idx].R1 || table[i].R1 == table[idx].R2 || table[i].R1 == table[idx].R3 || table[i].R1 == table[idx].R4 || table[i].R1 == table[idx].R5)
			{
				relation_array.push(i);
				relation_array.push(table[i].R2);
				continue;
			}

			if (table[i].R3 == table[idx].R1 || table[i].R1 == table[idx].R2 || table[i].R1 == table[idx].R3 || table[i].R1 == table[idx].R4 || table[i].R1 == table[idx].R5)
			{
				relation_array.push(i);
				relation_array.push(table[i].R3);
				continue;
			}

			if (table[i].R4 == table[idx].R1 || table[i].R1 == table[idx].R2 || table[i].R1 == table[idx].R3 || table[i].R1 == table[idx].R4 || table[i].R1 == table[idx].R5)
			{
				relation_array.push(i);
				relation_array.push(table[i].R4);
				continue;
			}

			if (table[i].R5 == table[idx].R1 || table[i].R1 == table[idx].R2 || table[i].R1 == table[idx].R3 || table[i].R1 == table[idx].R4 || table[i].R1 == table[idx].R5)
			{
				relation_array.push(i);
				relation_array.push(table[i].R5);
				continue;
			}			
		}
	}

	relation_array.push(idx);
	relation_array.push(table[idx].R1);
	return relation_array;
}

function department_range(idx) //idx of professor
{
	if(idx >= 0 && idx <= 28)
		return [0, 28];
	if(idx >28 && idx <= 53)
		return [29, 53];
	if(idx > 53 && idx <= 95)
		return [54, 95];
	if(idx > 95 && idx <= 118)
		return [96, 118];
	else
		return -1;
}

