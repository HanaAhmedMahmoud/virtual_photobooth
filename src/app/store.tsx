"use client"
import {create} from "zustand" 

type stripStore = {
	stripType: string;
	updateStripType: (stripType: string) => void;
}

export const useStripStore = create<stripStore>((set) => ({
	stripType: "",
	updateStripType: (stripSelected: string) => {
        set({stripType: stripSelected}); 
	}
})); 

//went with people for maintainability
type numOfPeopleStore = {
	peopleCount: number; 
	updatePeopleCount: (numOfPeople: number) => void; 
}

export const useNumOfPeopleStore = create<numOfPeopleStore>((set) => ({
	peopleCount: 0,
	updatePeopleCount:  (numOfPeople: number) => {
		set({peopleCount: numOfPeople})
	}
})); 