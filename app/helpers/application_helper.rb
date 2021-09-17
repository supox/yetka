module ApplicationHelper
    def nav_link_to(name, href, cls="nav-link", active_class="active")
        link_to_unless_current(name, href, class: cls) {|name| link_to(name, href, class: "#{cls} #{active_class}")}
    end
end
