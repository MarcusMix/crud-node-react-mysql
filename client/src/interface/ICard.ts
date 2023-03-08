import { ReactNode } from "react";

interface ICard {
	listCards?: any;
	setListGames?: any;
    id?: string;
    key: string | undefined;
	name?: string;
	cost?: string;
	category?: string;
    map?: any;
    children?: ReactNode;
}

export default ICard
