require 'test_helper'

class ListTest < ActiveSupport::TestCase
  def test_should_be_valid
    assert List.new.valid?
  end
end
