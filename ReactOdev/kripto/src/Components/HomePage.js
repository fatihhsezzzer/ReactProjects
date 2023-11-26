import React from 'react';

function HomePage() {
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col">
                    <h1 className="text-center">Hoş Geldiniz Kripto Para Dünyasına!</h1>
                    <p className="text-center">Kripto paralar, piyasa analizleri ve portföy yönetimi hakkında her şey burada.</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Canlı Piyasa Verileri</h5>
                            <p className="card-text">
                                Kripto para piyasalarındaki son dakika gelişmelerini ve fiyatları buradan takip edin.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Detaylı Analizler</h5>
                            <p className="card-text">
                                Piyasa trendleri ve coin analizleri ile bilinçli yatırımlar yapın.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Portföy Yönetimi</h5>
                            <p className="card-text">
                                Kripto para portföyünüzü kolayca yönetin ve izleyin.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
