var phantom1993 = funtction() {


	function chunk(arry,size=1){
		var result=[]
		result.push(arry.splice(0,size))
		result.push(arry)
		return result
	}

	return {
		chunk:chunk
	}


}()