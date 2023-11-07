import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const LevelContext = createContext();

const baseUrl = "http://localhost:8000"

const initialForm = {
    name: ""
}

const initialFilterForm = {
    name: ""
}

export const LevelProvider = ({ children }) => {
    const [levels, setLevels] = useState([]);
    const [level, setLevel] = useState([]);
    const [formValues, setFormValues] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [links, setLinks] = useState([]);
    const [meta, setMeta] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [filterFormValues, setFilterFormValues] = useState(initialFilterForm);
    const [isFiltered, setIsFiltered] = useState(false);

    const setPaginatedData = (response) => {
        setLevels(response.data.data);
        setLinks(response.data.links)
        setMeta(response.data.meta)
    }

    const getLevels = async (link, params = null) => {
        if (link !== null) {
            if (params !== null) {
                setIsLoading(true);
                try {
                    const response = await axios.get(link, {
                        params: {
                            name: params.name
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
            getLevels(`${baseUrl}/levels`, filterFormValues);
            toast.success("Filtro aplicado com sucesso", {
                position: toast.POSITION.TOP_RIGHT
            });
        } catch (e) {
            setErrors(e);
        }
    }

    const clearFilter = () => {
        setFilterFormValues(initialFilterForm);
        getLevels(`${baseUrl}/levels`);
        toast.success("Filtro limpo com sucesso", {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    const previousPage = async () => {
        if (filterFormValues !== initialFilterForm) {
            getLevels(links.prev, filterFormValues);
            return
        }
        
        await getLevels(links.prev);
    }

    const nextPage = async () => {
        if (filterFormValues !== initialFilterForm) {
            getLevels(links.next, filterFormValues);
            return
        }

        await getLevels(links.next);
    }

    const getLevel = async (id) => {
        const response = await axios.get(`${baseUrl}/levels/${id}`);
        const level = response.data.data;
        setLevel(level);
        setFormValues({
            name: level.name
        })
    }

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormValues({...formValues, [name]: value})
    }

    const storeLevel = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${baseUrl}/levels`, formValues);
            getLevels(`${baseUrl}/levels`);
            toast.success("Nível cadastrado com sucesso", {
                position: toast.POSITION.TOP_RIGHT
            });
            setFormValues(initialForm)
        } catch(e){
            setErrors(e.response.data);
        }
    }

    const updateLevel = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`${baseUrl}/levels/${level.id}`, formValues);
            getLevels(`${baseUrl}/levels`);
            toast.success("Nível editado com sucesso", {
                position: toast.POSITION.TOP_RIGHT
            });
            setFormValues(initialForm);
        } catch(e){
            setErrors(e.response.data);
        }
    }

    const deleteLevel = async (id) => {
        try {
            await axios.delete(`${baseUrl}/levels/${id}`);
            getLevels(`${baseUrl}/levels`);
            toast.success("Nível deletado com sucesso", {
                position: toast.POSITION.TOP_RIGHT
            });
        } catch(e) {
            setErrors(e.response.data);
        }
    }

    return (
        <LevelContext.Provider 
        value={{ 
            level, 
            levels, 
            getLevels, 
            getLevel, 
            onChange, 
            formValues,  
            storeLevel,
            errors,
            updateLevel,
            deleteLevel,
            previousPage,
            nextPage,
            isLoading,
            filterFormValues,
            onFilterChange,
            handleFilterSubmit,
            isFiltered,
            clearFilter,
            setErrors
         }}
        >
            {children}
        </LevelContext.Provider>
    )
}

export default LevelContext