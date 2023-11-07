import { createContext, useState } from "react";
import axios from "axios";
import * as moment from "moment";
import { toast } from "react-toastify";

const DeveloperContext = createContext();

const baseUrl = "http://localhost:8000"

const initialForm = {
    level_id: "",
    name: "",
    gender: "",
    birth_date: "",
    age: "",
    hobby: ""
}

const initialFilterForm = {
    name: "",
    level_id: "",
    gender: "",
    age: "",
    hobby: ""
}

export const DeveloperProvider = ({ children }) => {
    const [developers, setDevelopers] = useState([]);
    const [developer, setDeveloper] = useState([]);
    const [formValues, setFormValues] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [levels, setLevels] = useState([]);
    const [links, setLinks] = useState([]);
    const [meta, setMeta] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [filterFormValues, setFilterFormValues] = useState(initialFilterForm);
    const [isFiltered, setIsFiltered] = useState(false);
    
    const setPaginatedData = (response) => {
        setDevelopers(response.data.data);
        setLinks(response.data.links)
        setMeta(response.data.meta)
    }

    const getDevelopers = async (link, params = null) => {
        if (link !== null) {
            if (params !== null) {
                setIsLoading(true);
                try {
                    const response = await axios.get(link, {
                        params: {
                            name: params.name,
                            level_id: params.level_id,
                            gender: params.gender,
                            age: params.age,
                            hobby: params.hobby
                        }
                    })
                    setIsFiltered(true);
                    setPaginatedData(response);
                } catch (e) {
                    setErrors(e);
                } finally {
                    setIsLoading(false);
                }
                return
            }

            
            setIsLoading(true);
            try {
                setIsFiltered(false);
                const response = await axios.get(link);
                setPaginatedData(response);
            } catch (e) {
                setErrors(e);
            } finally {
                setIsLoading(false);
            }
        }
    }

    const onFilterChange = (e) => {
        const { name, value } = e.target;
        setFilterFormValues({...filterFormValues, [name]: value})
    }

    const handleFilterSubmit = (e) => {
        e.preventDefault();
        try {
            getDevelopers(`${baseUrl}/developers`, filterFormValues);
            toast.success("Filtro aplicado", {
                position: toast.POSITION.TOP_RIGHT
            });
        } catch (e) {
            setErrors(e);
        }
    }

    const clearFilter = () => {
        setFilterFormValues(initialFilterForm);
        getDevelopers(`${baseUrl}/developers`);
        toast.success("Filtro limpo com sucesso", {
            position: toast.POSITION.TOP_RIGHT
        });
    }


    const previousPage = async () => {
        if (filterFormValues !== initialFilterForm) {
            getDevelopers(links.prev, filterFormValues);
            return
        }

        await getDevelopers(links.prev);
    }

    const nextPage = async () => {
        if (filterFormValues !== initialFilterForm) {
            getDevelopers(links.next, filterFormValues);
            return
        }

        await getDevelopers(links.next);
    }

    const getDeveloper = async (id) => {
        const response = await axios.get(`${baseUrl}/developers/${id}`);
        const developer = response.data.data
        setDeveloper(developer);
        setFormValues({
            level_id: developer.level_id,
            name: developer.name,
            gender: developer.gender,
            birth_date: developer.birth_date,
            age: developer.age,
            hobby: developer.hobby
        })
    }

    const getLevels = async () => {
        const response = await axios.get(`${baseUrl}/levels`);
        setLevels(response.data.data);
    }

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormValues({...formValues, [name]: value})
        if (name === "birth_date") {
            setFormValues((prevForm) => {
                let age = moment().diff(moment(value), 'years');
                return ({
                    ...prevForm,
                    age: age
                });
            });
        }
    }

    const storeDeveloper = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${baseUrl}/developers`, formValues);
            getDevelopers(`${baseUrl}/developers`);
            toast.success("Desenvolvedor cadastrado com sucesso", {
                position: toast.POSITION.TOP_RIGHT
            });
            setFormValues(initialForm)
        } catch(e){
            setErrors(e.response.data.errors);
        }
    }
    
    const updateDeveloper = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`${baseUrl}/developers/${developer.id}`, formValues);
            getDevelopers(`${baseUrl}/developers`);
            toast.success("Desenvolvedor editado com sucesso", {
                position: toast.POSITION.TOP_RIGHT
            });
            setFormValues(initialForm);
        } catch {
            setErrors(e.response.data.errors);
        }
    }

    const deleteDeveloper = async (id) => {
        await axios.delete(`${baseUrl}/developers/${id}`);
        getDevelopers(`${baseUrl}/developers`);
        toast.success("Desenvolvedor deletado com sucesso", {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    return (
        <DeveloperContext.Provider 
        value={{ 
            getDevelopers,
            developers,
            formValues,
            onChange,
            errors,
            storeDeveloper,
            levels,
            getLevels,
            updateDeveloper,
            deleteDeveloper,
            getDeveloper,
            previousPage,
            nextPage,
            isLoading,
            filterFormValues,
            onFilterChange,
            handleFilterSubmit,
            isFiltered,
            clearFilter
         }}
        >
            {children}
        </DeveloperContext.Provider>
    )
}

export default DeveloperContext