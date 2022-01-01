export default function Footer(props) {
    /**
     * render template
     */
    return (
        <footer>
            <div className="footer clearfix mb-0 text-muted">
                <div className="float-end">
                    <p>
                        A product created{" "}
                        <span className="text-danger">
                            <i className="bi bi-heart-fill icon-mid" />
                        </span><span> by Phương Thắng</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}