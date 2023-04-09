import { useRouter } from 'next/router'


import SearchSummary from '@/components/SearchSummary';


export default function searchresult() {
    const router = useRouter()
    const {searchvalue} = router.query


  
  return (
    <div>
        {searchvalue && <SearchSummary searchstr = {searchvalue} />}
    </div>
  )
}




