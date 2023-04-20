'use client'

import { useState } from "react"

export default function Home() {
	const [likes, setLikes] = useState<number>(0);

	return (
		<div>
			
			<button 
				className="bg-blue-300 px-3 py-1 rounded-md"
				onClick={() => {
					setLikes(likes + 1);
				}}
			>
				Like ({ likes })
			</button>
			
		</div>
	)
}