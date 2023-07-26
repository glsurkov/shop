import {itemState} from "../store/items";

export function filterItems(array: itemState, select: string) {

    return (
        array.items
            .filter((el) => (el.category === select || select === "All"))
    )

}