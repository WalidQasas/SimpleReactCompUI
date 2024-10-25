import { useEffect, useRef, useState } from "react";

export function Page1(){

    const [countries, setCountries] = useState([]);
    const [countrySearch, setCountrySearch] = useState("");
    let debounceTimeout = useRef();

    useEffect(()=>{
    const controller = new AbortController();
    const signal = controller.signal;
    
    fetch('https://restcountries.com/v3.1/all',{signal})
    .then(response => response.json())
    .then(function (countriesReturned){
        setCountries(countriesReturned);
    })
    .catch(error => {
        if(error == 'Fetch aborted'){
            console.error(error)

        }else{
            console.error('error:', error)
        }
        });

    return () => controller.abort('Fetch aborted');

    },[])

    // Check react with passing keys in API objects
    // Check how to cancel a request (unmounting) how to write it professionally
    // Returning a mount

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;

        if (debounceTimeout.current) {
            console.log('cleared timeout');
            clearTimeout(debounceTimeout.current);
        }

        debounceTimeout.current = setTimeout(() => {
            if (countrySearch) {
              const fetchUrl = `https://restcountries.com/v3.1/name/` + countrySearch;
              fetch(fetchUrl, { signal })
                .then((response) => response.json())
                .then((countriesReturned) => {
                  setCountries(countriesReturned);
                })
                .catch((error) => {
                  if (error == "Search aborted") {
                    console.log(error);
                  } else {
                    console.error("error:", error);
                    setError(error.message);
                  }
                });
            }
          }, 1500);

          return () => {
            controller.abort("Search aborted");
            clearTimeout(debounceTimeout);
          };

    }, [countrySearch])

    

    // Implement debouncing, cancel the previous fetch if I get a new one
    return (
        <>
        <h1>Page 1 is here</h1>
        <input onChange={(event)=>{
            setCountrySearch(event.target.value);
            console.log('Dom event',event.target.value);
        }} placeholder="Search for a country"/>
        <div>{countries.map((country)=>(
            <div key={country.cca2}>{country.name.common}</div>
        ))}</div>
        </>
    )
}