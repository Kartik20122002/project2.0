import fetch from 'node-fetch'

export const fetchData = async ()=>{
    try {
        const fetchedData = await fetch('https://api.wazirx.com/api/v2/tickers');
    const result = await fetchedData.json();

    const slicedResult = Object.values(result).slice(0,10);

    return slicedResult;    
    } catch (error) {
        return false;
    }
}
