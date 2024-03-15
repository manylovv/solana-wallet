export const Companies = () => {
  const companies = [
    'Company',
    'Company',
    'Company',
    'Company',
    'Company',
    'Company',
    'Company',
    'Company',
    'Company',
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-20 flex flex-col gap-8 py-8 sm:py-12">
      <p className="text-eyebrow text-center font-mono font-light uppercase text-xs sm:text-sm">
        Powering tools and integrations from companies all around the world
      </p>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
        {companies.map((name, i) => (
          <MockCompany key={i} name={name} />
        ))}
      </div>
    </section>
  );
};

const MockCompany = (props: { name: string }) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="size-5 rounded-full bg-gray-200" />
      <div className="text-gray-200 font-medium">{props.name}</div>
    </div>
  );
};
