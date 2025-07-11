function Tablesprite() {
    return (
        <div className="h-tablehit flex flex-col bg-table">
            {/* Top Shadow */}
            <div className="flex h-full flex-col bg-linear-to-t from-table to-tablelight"></div>

            <Computer />
            <Keyboard />
            {/* Bottom shadow */}
            <div className="h-[5vh] bg-shadow">Table bottom</div>
        </div>
    );
}

export default Tablesprite;
