import DataCard from "@/components/DataCard";
import SearchBox from "@/components/SearchBox";

const DataFetch = async ({ searchParams }) => {
   const params = await searchParams;
  const userName = params?.name;
  return(
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
    <SearchBox/>
    {userName ? (<DataCard userName={userName}/>) :
     (
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <p className="text-gray-600">
            Search a name to see gender accuracy
          </p>
        </div>
      )}
  </div>
  )
};

export default DataFetch;