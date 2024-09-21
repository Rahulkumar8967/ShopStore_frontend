import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Transition, Menu } from "@headlessui/react";

import {
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";
import ProductCard from "./ProductCard";
import { mens_kurta } from "../../Data/mens_kurta";
import { filters, singleFilter } from "./FilterData";
import {
  FormControl,
  FormControlLabel,
  Pagination,
  Radio,
  RadioGroup,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProducts } from "../../../State/Product/Action";

const sortOptions = [
  { name: "Price: Low to High", current: false },
  { name: "Price: High to Low", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Product() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState(sortOptions[0]);
  const [filterOptions, setFilterOptions] = useState({});
  const [radioFilter, setRadioFilter] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const param = useParams();
  const dispatch=useDispatch();
const {product}=useSelector(store=>store)

const decodedQueryString=decodeURIComponent(location.search);
const searchParams=new URLSearchParams(decodedQueryString);
const colorValue=searchParams.get("color")
const sizeValue=searchParams.get("size")
const priceValue=searchParams.get("price")
const discount=searchParams.get("discount");
const sortValue=searchParams.get("sort");
const pageNumber=searchParams.get("page") || 1;
const stock=searchParams.get("stock");

const handlePaginationChange=(event,value)=>{
  const searchParams=new URLSearchParams(location.search)
  searchParams.set("page",value);
  const query=searchParams.toString();
  navigate({search:`?${query}`})
}

  const handleSortChange = (option) => {
    setSelectedSortOption(option);

    // Sorting logic (assuming mens_kurta is the array you want to sort)
    const sortedProducts = [...mens_kurta];

    if (option.name === "Price: Low to High") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option.name === "Price: High to Low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

   
  };

  const handleFilter = (value, sectionId) => {
    const searchParams = new URLSearchParams(location.search);

    let filterValue = searchParams.get(sectionId) || "";
    let filterArray = filterValue ? filterValue.split(",") : [];

    if (filterArray.includes(value)) {
      filterArray = filterArray.filter((item) => item !== value);
    } else {
      filterArray.push(value);
    }

    if (filterArray.length === 0) {
      searchParams.delete(sectionId);
    } else {
      searchParams.set(sectionId, filterArray.join(","));
    }

    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  };

  const handleRadioFilterChange = (e, sectionId) => {
    setRadioFilter({ [sectionId]: e.target.value });

    const searchParams = new URLSearchParams(location.search);
    searchParams.set(sectionId, e.target.value);
    navigate({ search: `?${searchParams.toString()}` });
  };


  useEffect(() => {
    const [minPrice, maxPrice] =
      priceValue === null ? [0, 10000] : priceValue.split("-").map(Number);
    const data = {
      category: param.lavelThree,
      colors: colorValue || [],
      sizes: sizeValue || [],
      minPrice: minPrice || 0,
      maxPrice: maxPrice || 10000,
      minDiscount: discount || 0,
      sort: sortValue || "price_low",
      pageNumber: pageNumber-1 ,
      pageSize: 10,
      stock: stock,
    };
    dispatch(findProducts(data));
  }, [
    param.lavelThree,
    colorValue,
    sizeValue,
    priceValue,
    discount,
    sortValue,
    pageNumber,
    stock,
  ]);
  
  


  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            open={mobileFiltersOpen}
            onClose={() => setMobileFiltersOpen(false)}
            className="fixed inset-0 z-40 flex"
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                {/* Dialog content */}
              </div>
            </Transition.Child>
          </Dialog>
        </Transition>

        <main className="mx-auto px-4 sm:px-6 lg:px-15">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 pl-15">
              New Arrivals
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Sort by: {selectedSortOption.name}
                    <ChevronDownIcon
                      className="-mr-1 ml-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href="#"
                              onClick={() => handleSortChange(option)}
                              className={classNames(
                                option.current
                                  ? "font-medium text-gray-900"
                                  : "text-gray-700",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              {/* Menu component */}
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
          {/*  */}
          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
              <div>
                <div className="py-5 flex justify-between item-center">
                  <h1 className="text-lg opacity-50 font-bold pl-5 py-2">
                    Filters
                  </h1>
                  <FilterListIcon />
                </div>

                <form className="mt-4 border-t border-gray-200 pl-6">
                  {filters.map((section) => (
                    <Disclosure
                      as="div"
                      key={section.id}
                      className="border-t border-gray-200 px-3 py-6"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-mx-2 -my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white px-right-10 py-3 text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">
                                {section.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-5">
                            <div className="space-y-6">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    onChange={() =>
                                      handleFilter(option.value, section.id)
                                    }
                                  />
                                  <label
                                    htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                    className="ml-3 min-w-0 flex-1 text-gray-500"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>

                <FormControl className="mt-4 border-t border-gray-200">
                  {singleFilter.map((section, sectionIdx) => (
                    <div
                      key={sectionIdx}
                      className="border-t border-gray-200 px-4 py-6"
                    >
                      <RadioGroup
                        name={section.id}
                        value={radioFilter ? radioFilter[section.id] : ""}
                        onChange={(e) => handleRadioFilterChange(e, section.id)}
                      >
                        {section.options.map((option, optionIdx) => (
                          <FormControlLabel
                            key={optionIdx}
                            value={option.value}
                            control={<Radio />}
                            label={option.label}
                          />
                        ))}
                      </RadioGroup>
                    </div>
                  ))}
                </FormControl>
              </div>

              <div className="lg:col-span-4">
                <div className="border-2 border-gray-200 rounded-lg">
                  <div className="p-4">
                    {/* Products grid */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {product.products && product.products?.content?.map((item) => (
                        <ProductCard product={item} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full px-[3.6rem]">
          <div className="px-4 py-5 flex justify-center">
            <Pagination count={product.products?.totalPages} color="secondary" onChange={handlePaginationChange}/>
            
            </div>  
          </section>
        </main>
      </div>
    </div>
  );
}
