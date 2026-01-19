export default function Footer() {
  return (
      <div className="w-9/12 mx-auto">
    <footer className="bg-gray-800 text-gray-200 py-6 mt-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center">
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Labib SCIC-12-A9. All rights reserved.
        </p>
       
      </div>
    </footer>
      </div>
  );
}
