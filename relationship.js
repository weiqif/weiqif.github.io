
function find_related(idx, table) //idx is the index of professor 1
{
	var relation_array = [];
	for ( var i = 0; i < 50; i ++ ) 
	{
		if (i != idx) 
		{
			if (table[i].AcePer == table[idx].R1 || table[i].R1 == table[idx].R2 || table[i].R1 == table[idx].R3 || table[i].R1 == table[idx].R4 || table[i].R1 == table[idx].R5)
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

