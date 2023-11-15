import Footer from "./_components/footer";

const LandingPage = () => {
  return (
    <div className="flex min-h-full flex-col">
      <div className="flex flex-1 items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl">Landing page</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
