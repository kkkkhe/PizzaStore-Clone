import { AllPizzas } from "../components/allPizzas/AllPizzas"
import { Pagination } from "../components/pagination/Pagination"
import { Sort } from "../components/sort/Sort"

export const Home = () => {
return (
	<>
	<Sort/>
        <AllPizzas/>
        <Pagination/>
	</>
)
}