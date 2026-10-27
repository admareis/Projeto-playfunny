import ShoppingBag from "../assets/imgs/sacolas-de-compras.png"

// Imagens: coloque os arquivos em public/produtos/ com os nomes usados em src="..."
function Produtos() {
  return (
    <section className="px-4 py-8">
      <h1 className="mb-6 text-center text-sm uppercase">Nossos produtos</h1>

      {/* ---------- COMPETITIVOS ---------- */}
      <h2 id="competitivos" className="mb-3 scroll-mt-32 text-sm">Competitivos</h2>
      <div className="mb-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
        <div className="bg-white p-2 text-xs shadow-md hover:bg-gray-100">
          <img src="/public/wingspan.webp" alt="Wingspan" className="w-full object-contain" />
          <div className="mt-2 flex justify-between">
            <h3 className="uppercase">Wingspan</h3>
            <img src={ShoppingBag} alt="Sacola de compras" className="h-6 w-6" />
          </div>
          <p>VALOR PRODUTO</p>
          <p>PARCELAMENTO</p>
        </div>

        <div className="bg-white p-2 text-xs shadow-md hover:bg-gray-100">
          <img src="public/terracotta_army.webp" alt="Terracotta Army" className="w-full object-contain" />
          <div className="mt-2 flex justify-between">
            <h3 className="uppercase">Terracotta Army</h3>
            <img src={ShoppingBag} alt="Sacola de compras" className="h-6 w-6" />
          </div>
          <p>VALOR PRODUTO</p>
          <p>PARCELAMENTO</p>
        </div>

        <div className="bg-white p-2 text-xs shadow-md hover:bg-gray-100">
          <img src="public/rallyman_dirt.webp" alt="Rallyman" className="w-full object-contain" />
          <div className="mt-2 flex justify-between">
            <h3 className="uppercase">Rallyman</h3>
            <img src={ShoppingBag} alt="Sacola de compras" className="h-6 w-6" />
          </div>
          <p>VALOR PRODUTO</p>
          <p>PARCELAMENTO</p>
        </div>

        <div className="bg-white p-2 text-xs shadow-md hover:bg-gray-100">
          <img src="public/gaudi.webp" alt="Gaudí" className="w-full object-contain" />
          <div className="mt-2 flex justify-between">
            <h3 className="uppercase">Gaudí</h3>
            <img src={ShoppingBag} alt="Sacola de compras" className="h-6 w-6" />
          </div>
          <p>VALOR PRODUTO</p>
          <p>PARCELAMENTO</p>
        </div>
      </div>

      {/* ---------- COOPERATIVOS ---------- */}
      <h2 id="cooperativos" className="mb-3 scroll-mt-32 text-sm">Cooperativos</h2>
      <div className="mb-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
        <div className="bg-white p-2 text-xs shadow-md hover:bg-gray-100">
          <img src="public/dorfromantik_sakura.webp" alt="Dorfromantik" className=" w-full object-contain" />
          <div className="mt-2 flex justify-between">
            <h3 className="uppercase">Dorfromantik</h3>
            <img src={ShoppingBag} alt="Sacola de compras" className="h-6 w-6" />
          </div>
          <p>VALOR PRODUTO</p>
          <p>PARCELAMENTO</p>
        </div>

        <div className="bg-white p-2 text-xs shadow-md hover:bg-gray-100">
          <img src="public/sintonia.webp" alt="NOME PRODUTO" className=" w-full object-contain" />
          <div className="mt-2 flex justify-between">
            <h3 className="uppercase">NOME PRODUTO</h3>
            <img src={ShoppingBag} alt="Sacola de compras" className="h-6 w-6" />
          </div>
          <p>VALOR PRODUTO</p>
          <p>PARCELAMENTO</p>
        </div>

        <div className="bg-white p-2 text-xs shadow-md hover:bg-gray-100">
          <img src="public/time_stories.webp" alt="NOME PRODUTO" className="w-full object-contain" />
          <div className="mt-2 flex justify-between">
            <h3 className="uppercase">NOME PRODUTO</h3>
            <img src={ShoppingBag} alt="Sacola de compras" className="h-6 w-6" />
          </div>
          <p>VALOR PRODUTO</p>
          <p>PARCELAMENTO</p>
        </div>

        <div className="bg-white p-2 text-xs shadow-md hover:bg-gray-100">
          <img src="public/duna_imperium.webp" alt="NOME PRODUTO" className="w-full object-contain" />
          <div className="mt-2 flex justify-between">
            <h3 className="uppercase">NOME PRODUTO</h3>
            <img src={ShoppingBag} alt="Sacola de compras" className="h-6 w-6" />
          </div>
          <p>VALOR PRODUTO</p>
          <p>PARCELAMENTO</p>
        </div>
      </div>

      {/* ---------- PRA GALERA ---------- */}
      <h2 id="pra-galera" className="mb-3 scroll-mt-32 text-sm">Pra galera</h2>
      <div className="mb-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
        <div className="bg-white p-2 text-xs shadow-md hover:bg-gray-100">
          <img src="public/flip_7.webp" alt="Flip 7" className="w-full object-contain" />
          <div className="mt-2 flex justify-between">
            <h3 className="uppercase">Flip 7</h3>
            <img src={ShoppingBag} alt="Sacola de compras" className="h-6 w-6" />
          </div>
          <p>VALOR PRODUTO</p>
          <p>PARCELAMENTO</p>
        </div>

        <div className="bg-white p-2 text-xs shadow-md hover:bg-gray-100">
          <img src="public/cdigo_secreto.webp" alt="Código Secreto Harry Potter" className="w-full object-contain" />
          <div className="mt-2 flex justify-between">
            <h3 className="uppercase">Código Secreto Harry Potter</h3>
            <img src={ShoppingBag} alt="Sacola de compras" className="h-6 w-6" />
          </div>
          <p>VALOR PRODUTO</p>
          <p>PARCELAMENTO</p>
        </div>

        <div className="bg-white p-2 text-xs shadow-md hover:bg-gray-100">
          <img src="public/conectados.webp" alt="Conectados" className=" w-full object-contain" />
          <div className="mt-2 flex justify-between">
            <h3 className="uppercase">Conectados</h3>
            <img src={ShoppingBag} alt="Sacola de compras" className="h-6 w-6" />
          </div>
          <p>VALOR PRODUTO</p>
          <p>PARCELAMENTO</p>
        </div>

        <div className="bg-white p-2 text-xs shadow-md hover:bg-gray-100">
          <img src="public/cdigo_secreto_1.webp" alt="Código Secreto" className="w-full object-contain" />
          <div className="mt-2 flex justify-between">
            <h3 className="uppercase">Código Secreto</h3>
            <img src={ShoppingBag} alt="Sacola de compras" className="h-6 w-6" />
          </div>
          <p>VALOR PRODUTO</p>
          <p>PARCELAMENTO</p>
        </div>
      </div>

      {/* ---------- PRA FAMÍLIA ---------- */}
      <h2 id="pra-familia" className="mb-3 scroll-mt-32 text-sm">Pra família</h2>
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        <div className="bg-white p-2 text-xs shadow-md hover:bg-gray-100">
          <img src="public/abroad.webp" alt="Abroad" className="w-full object-contain" />
          <div className="mt-2 flex justify-between">
            <h3 className="uppercase">Abroad</h3>
            <img src={ShoppingBag} alt="Sacola de compras" className="h-6 w-6" />
          </div>
          <p>VALOR PRODUTO</p>
          <p>PARCELAMENTO</p>
        </div>

        <div className="bg-white p-2 text-xs shadow-md hover:bg-gray-100">
          <img src="public/finspan_1.webp" alt="Finspan" className="w-full object-contain" />
          <div className="mt-2 flex justify-between">
            <h3 className="uppercase">Finspan</h3>
            <img src={ShoppingBag} alt="Sacola de compras" className="h-6 w-6" />
          </div>
          <p>VALOR PRODUTO</p>
          <p>PARCELAMENTO</p>
        </div>

        <div className="bg-white p-2 text-xs shadow-md hover:bg-gray-100">
          <img src="public/catan.webp" alt="Catan" className="w-full object-contain" />
          <div className="mt-2 flex justify-between">
            <h3 className="uppercase">Catan</h3>
            <img src={ShoppingBag} alt="Sacola de compras" className="h-6 w-6" />
          </div>
          <p>VALOR PRODUTO</p>
          <p>PARCELAMENTO</p>
        </div>

        <div className="bg-white p-2 text-xs shadow-md hover:bg-gray-100">
          <img src="public/fromage.webp" alt="Fromage" className="w-full object-contain" />
          <div className="mt-2 flex justify-between">
            <h2 className="uppercase">Fromage</h2>
            <img src={ShoppingBag} alt="Sacola de compras" className="h-6 w-6" />
          </div>
          <p>VALOR PRODUTO</p>
          <p>PARCELAMENTO</p>
        </div>
      </div>
    </section>
  );
}

export default Produtos;