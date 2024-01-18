import React, { createContext, useState, useContext } from 'react';


const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);

    const [fav, setFav] = useState([]);

    const logout = () => {
        setCurrentUser(null);
        setFav([]);

    };

    const fetchFavorites = () => {
        if (!currentUser) {
            console.error('currentUser tanımlı değil');
            return;
        }
        console.log(currentUser)

        fetch(`https://localhost:7237/view/${currentUser.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // Gerekirse diğer header'lar
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Favori ürünler alınamadı.');
                }
            })
            .then(data => {
                setFav(data); // Favori ürünleri yerel duruma ekle
            })
            .catch(error => {
                alert(error.message);
            });
    };


    const isFavorite = (product) => {
        // Ürünün favori olup olmadığını kontrol edin
        return fav.some(fav => fav.id === product.id);
    };


    //WishList İşlemleri

    const addToFav = (product) => {
        if (!currentUser) {
            alert('Ürünü Favoriye Eklemek İçin Lütfen Giriş Yapınız...');
            return;
        }
        // Ürün zaten favorilerde mi kontrol et
        const isFav = fav.some(item => item.id === product.id);


        const url = isFav
            ? `https://localhost:7237/remove?ProductId=${product.id}&UserId=${currentUser.id}`
            : `https://localhost:7237/add?ProductId=${product.id}&UserId=${currentUser.id}`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Gerekirse diğer header'lar
            },
            // Eğer body gerekiyorsa buraya ekleyin
        })
            .then(response => {
                if (response.ok) {
                    // Burada favoriler listesini güncelleyebilirsiniz
                    if (isFav) {
                        // Favorilerden çıkar
                        setFav(fav.filter(item => item.id !== product.id));
                        alert("Ürün favorilerden çıkarıldı.");
                    } else {
                        // Favorilere ekle
                        setFav([...fav, product]);
                        alert("Ürün favorilere eklendi.");
                    }
                } else {
                    throw new Error('İşlem başarısız.');
                }
            })
            .catch(error => {
                alert(error.message);
            });
    };

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser, logout, fav, addToFav, isFavorite, fetchFavorites }}>
            {children}
        </UserContext.Provider>
    );
};
