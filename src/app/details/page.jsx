const Details = () => {
  return (
    <div className="h-[100vh] mx-auto lg:p-[3rem] dark:bg-gray-800 dark:text-gray-100">
	<div className="mt-6 md:mt-[6rem] lg:mt-4 flex flex-col max-w-5xl mx-auto overflow-hidden rounded">
		<img src="https://img.freepik.com/free-vector/colorful-science-education-background_23-2148490697.jpg" alt="" 
		className="w-full h-80 md:h-96 dark:bg-gray-500 pt-[46px]  md:pt-0" />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-auto lg:rounded-md dark:bg-gray-900">
			<div className="space-y-2">
				<a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">The Best Activewear from the Nordstrom Anniversary Sale</a>
				<p className="text-xs dark:text-gray-400">By
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline">Leroy Jenkins</a>
				</p>
			</div>
			<div className="dark:text-gray-100">
				<p>Insert the actual text content here...</p>
			</div>
		</div>
	</div>
</div>
  );
};

export default Details;
