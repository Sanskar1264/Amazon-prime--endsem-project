export default function Widget() {
    return (
        <div className="bg-zinc-900 text-white min-h-screen p-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">prime video</h1>
            <button className="bg-white text-black px-4 py-2 rounded">Sign In</button>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold"><span className="text-blue-500">Prime</span> Top movies</h2>
              <div className="flex space-x-4 overflow-x-auto">
                <img src="https://placehold.co/200x300" alt="Movie 1" className="rounded-lg">
                <img src="https://placehold.co/200x300" alt="Movie 2" className="rounded-lg">
                <img src="https://placehold.co/200x300" alt="Movie 3" className="rounded-lg">
                <img src="https://placehold.co/200x300" alt="Movie 4" className="rounded-lg">
                <img src="https://placehold.co/200x300" alt="Movie 5" className="rounded-lg">
              </div>
            </div>
        <div>
          <h2 className="text-xl font-bold"><span className="text-blue-500">Prime</span> Mystery and thriller movies</h2>
          <div className="flex space-x-4 overflow-x-auto">
            <img src="https://placehold.co/200x300" alt="Movie 6" className="rounded-lg">
            <img src="https://placehold.co/200x300" alt="Movie 7" className="rounded-lg">
            <img src="https://placehold.co/200x300" alt="Movie 8" className="rounded-lg">
            <img src="https://placehold.co/200x300" alt="Movie 9" className="rounded-lg">
            <img src="https://placehold.co/200x300" alt="Movie 10" className="rounded-lg">
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-bold"><span className="text-blue-500">Prime</span> Drama movies</h2>
          <div className="flex space-x-4 overflow-x-auto">
            <img src="https://placehold.co/200x300" alt="Movie 11" className="rounded-lg">
            <img src="https://placehold.co/200x300" alt="Movie 12" className="rounded-lg">
            <img src="https://placehold.co/200x300" alt="Movie 13" className="rounded-lg">
            <img src="https://placehold.co/200x300" alt="Movie 14" className="rounded-lg">
            <img src="https://placehold.co/200x300" alt="Movie 15" className="rounded-lg">
          </div>
        </div>
          </div>
        </div>
    )
}
