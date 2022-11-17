export const ListWrapper = ({ children, name, color = 'white' }) => (
    <div className="grid gap-2">
        <h3 className="uppercase font-bold">{name}</h3>
        <div className={`h-1 ${color === 'black' ? 'lg:bg-black' : 'lg:bg-white'} bg-white`} />
        {children}
    </div>
)

