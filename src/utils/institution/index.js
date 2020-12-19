import React, { createContext, useState, useContext, useEffect } from 'react'
import Http, { ResponseCodes } from "utils/http"

const InstitutionContext = createContext({});
//All Client-Side
export const InstitutionsProvider = ({ children }) => {
    const [institutions, setInstitutions] = useState([])
    const [selectedInstitution, setSelectedInstitution] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        updateInstitutions();
    }, [])

    function updateInstitutions() {
        new Http("/console/institution?list")
            .onResponse(({ data: response }) => {
                if(response.code == ResponseCodes.OK){
                    setInstitutions(response.data);
                    if (response.data.length > 0) {
                        setSelectedInstitution(response.data[0]);
                    }
                }
                else{
                }
                setLoading(false);
                
            }).onError((e) => {
                console.log(e)
                setLoading(false);
            });
    }

    function setSelectedInstitutionById(id) {
        console.log(id)
        let institution = institutions.reduce((acc,x) => {
            if(x.id == id) return x;
            return acc;
        }, null);
        if(institution){
            setSelectedInstitution(institution)
        }
    }



    return (
        <InstitutionContext.Provider value={{ institutions, loading, updateInstitutions, selectedInstitution, setSelectedInstitution,setSelectedInstitutionById }}>
            {children}
        </InstitutionContext.Provider>
    )
}

export default function useInstitution() {
    const context = useContext(InstitutionContext);
    return context
};

export function withInstitution(Component) {
    const context = useContext(InstitutionContext);
    return (function (props) {
        return <Component {...props} auth={context} />;
    });
};