// let log4js = require('log4js');
// let logger = log4js.getLogger();

module.exports = function char(str)
{
    let unique = '';
    let res;
    if(str)
    {
		let str1 = str.toLowerCase();
		for(let i = 0; i < str1.length; i = i + 1)
			{
				if(unique.indexOf(str1[i]) === -1)
				{
					unique = unique + str1[i];
				}
			}
	res = unique;
    }
    else
    {
		res = null;
	}
	return res;
};
