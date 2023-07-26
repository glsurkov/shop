import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {fetchItems} from "../../../store/items";
import Item from "../Item/Item";
// @ts-ignore
import styles from './Store.module.scss'
import Pages from "../../../UI/Pages/Pages";
import Select from "../../../UI/Select/Select";
import {fetchCategories} from "../../../store/categories";
import {filterItems} from "../../../utils/items";
import {addCart} from "../../../store/cart";

const Store: React.FC = () => {

    const dispatch = useAppDispatch()
    const categories = useAppSelector(state => state.categories)
    const items = useAppSelector(state => state.items)

    const [filtered, setFiltered] = useState(items.items)
    const [select, setSelect] = useState("All")
    const [page, setPage] = useState({
        pageStart: 1,
        pageEnd: 12,
    })
    const [current, setCurrent] = useState(1)

    function handleSelectChange(value: string) {
        setSelect(value)
    }

    function handlePageSwitch(newPage: number) {
        const newPageEnd = newPage * 12

        setPage({
            pageStart: newPageEnd - 11,
            pageEnd: newPageEnd
        })
        setCurrent(newPage)
    }

    function handleCartAdd(id:number){
        dispatch(addCart(filtered.find((el) => el.id === id)!))
    }

    useEffect(() => {
        dispatch(fetchCategories())
        dispatch(fetchItems())
    }, [])

    useEffect(() => {
        setFiltered(filterItems(items, select))
        setPage({
            pageStart: 1,
            pageEnd: 12
        })
        setCurrent(1)
    }, [select, items])

    return (
        <>
            <main>
                <Select onChange={handleSelectChange} options={categories.categories}/>
                <div className={styles.container}>
                    {
                        filtered
                            .filter((el, index) => (index >= page.pageStart - 1 && index <= page.pageEnd - 1))
                            .map((el) => {
                                return (
                                    <div className={styles.card} key={el.id}>
                                        <Item id={el.id} onClick={handleCartAdd} price={el.price} title={el.title} description={el.description} image={el.image}/>
                                    </div>
                                )
                            })
                    }
                </div>
            </main>
            <Pages onClick={handlePageSwitch} current={current} pages={filtered.length}/>
        </>
    );
};

export default Store;