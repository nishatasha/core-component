import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useHistory } from "react-router-dom";
import styles from "../css/Search.module.css";
import allProducts from "../data/allProducts"; // Ensure this path is correct

function Search({ setSearchFor, closeSearch, showSearch }) {
  const [suggestions, setSuggestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const close = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const search = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 20 },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const line = {
    visible: { scale: 1 },
    hidden: { scale: 0 },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filteredProducts = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filteredProducts);
      if (filteredProducts.length === 0) {
        history.push('/');
      }
    } else {
      setSuggestions([]);
    }
  }, [searchTerm, history]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value.trim());
    setSearchFor(event.target.value.trim());
  };

  const handleSearchClick = () => {
    setSearchTerm("");
    setSuggestions([]);
    closeSearch();
  };

  useEffect(() => {
    return history.listen(() => {
      handleSearchClick();
    });
  }, [history]);

  return (
    <AnimatePresence>
      {showSearch && (
        <>
          <motion.div
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeSearch}
            transition={{ ease: "easeOut", duration: 0.4 }}
            className={styles.backdrop}
          />
          <div className={styles.search}>
            <div className={styles.container}>
              <motion.button
                variants={close}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ ease: "easeOut", duration: 0.4 }}
                onClick={closeSearch}
                className={styles.close}
              >
                <svg
                  className={styles.svgClose}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
                </svg>
              </motion.button>
              <motion.div
                variants={search}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ ease: "easeOut", duration: 0.4 }}
                className={styles.form}
              >
                <svg
                  className={styles.svgSearch}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" />
                </svg>
                <input
                  onChange={handleInputChange}
                  value={searchTerm}
                  className={styles.textField}
                  name="searchFor"
                  type="text"
                  placeholder="Search Products"
                  spellCheck="false"
                  autoComplete="off"
                  autoFocus
                />
                {searchTerm.length > 0 && suggestions.length > 0 && (
                  <div className={styles.suggestions}>
                    {suggestions.map((product) => (
                      <Link
                        key={product.id}
                        to={`/shopping-cart/products/${product.id}`}
                        className={styles.suggestionItem}
                        onClick={handleSearchClick}
                      >
                        <img src={product.image} alt={product.name} className={styles.suggestionImage} />
                        <div className={styles.suggestionDetails}>
                          <p>{product.name}</p>
                          <p>${product.price}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </motion.div>
              <motion.div
                variants={line}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ ease: "easeOut", duration: 0.8 }}
                className={styles.line}
              />
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

Search.propTypes = {
  setSearchFor: PropTypes.func.isRequired,
  closeSearch: PropTypes.func.isRequired,
  showSearch: PropTypes.bool.isRequired,
};

export default Search;
