import { Dispatch, SetStateAction } from "react";

interface IForm {
    id?: string;
    key?: string;
	name?: string;
	cost?: string;
	category?: string;
    open?: boolean;
    setOpen?: Dispatch<SetStateAction<boolean>>;
    listCards?: Dispatch<SetStateAction<boolean>>;
    setListGames?: Dispatch<SetStateAction<boolean>>;
}

export default IForm