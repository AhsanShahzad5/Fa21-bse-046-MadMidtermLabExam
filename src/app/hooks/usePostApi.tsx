import { useState } from "react";

export type Payload = {
    title : string;
    price : number;
    image: string;
    description : string;
    available : boolean;
}



const usePostApi = (url: string) => {
    const [data, setData] = useState<Payload | null>(null);

    // 2. Create a function that will make a request to the api
    // 3. Return the data that we are getting from the api

    const postData = async (payload: Payload) => {
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const responseData = await response.json();
            setData(responseData);
        } catch (error) {
            console.error(error);
        }
    };

    return {
        data,
        postData,
    };
};

export default usePostApi;

