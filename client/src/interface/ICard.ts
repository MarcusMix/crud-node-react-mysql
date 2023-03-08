import { Dispatch, ReactNode, SetStateAction } from "react";

interface ICard {
	listCards?: Dispatch<SetStateAction<boolean>>;
	setListGames?: Dispatch<SetStateAction<boolean>>;
    id?: string;
    key?: string;
	name?: string;
	cost?: string;
	category?: string;
    map?: any;
    children?: ReactNode;
}

export default ICard
